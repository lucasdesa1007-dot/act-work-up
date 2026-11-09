/* act Work&Up — navegação e interações já representadas no rascunho */
(() => {
  const screens = [...document.querySelectorAll('.screen')];
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  const authIds = new Set(['login','cadastro-tipo','cadastro-pessoal','cadastro-empresa']);

  function showScreen(id) {
    const target = document.getElementById(id);
    if (!target) return;
    screens.forEach(screen => screen.classList.toggle('active', screen === target));
    const isAuth = authIds.has(id);
    header.style.display = isAuth ? 'none' : 'flex';
    footer.style.display = isAuth ? 'none' : '';
    document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.screen === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.addEventListener('click', event => {
    const navigation = event.target.closest('[data-screen]');
    if (navigation) {
      // Botões de envio navegam somente após a validação do formulário.
      if (navigation.type === 'submit' && navigation.form) return;
      event.preventDefault();
      showScreen(navigation.dataset.screen);
    }
  });

  // Alternância entre as áreas de Perfil, Conta, Notificações e Ajuda.
  document.querySelectorAll('[data-settings-tab]').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.settingsTab;
      document.querySelectorAll('[data-settings-tab]').forEach(item => item.classList.toggle('active', item === button));
      document.querySelectorAll('[data-settings-pane]').forEach(pane => pane.classList.toggle('active', pane.dataset.settingsPane === name));
    });
  });

  // Favoritar serviço, conforme os ícones previstos nos cards do rascunho.
  document.querySelectorAll('.favorite').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      button.textContent = button.classList.contains('active') ? '♥' : '♡';
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    });
  });

  // Busca e filtros da tela Explorar.
  const searchInput = document.getElementById('service-search');
  const categoryFilter = document.getElementById('category-filter');
  const modeFilter = document.getElementById('mode-filter');
  const sortFilter = document.getElementById('sort-filter');
  const grid = document.getElementById('explore-grid');
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty-results');
  function filterServices() {
    if (!grid) return;
    const query = (searchInput.value || '').trim().toLocaleLowerCase('pt-BR');
    const category = categoryFilter.value;
    const mode = modeFilter.value;
    const cards = [...grid.querySelectorAll('.service-card')];
    cards.forEach((card, i) => { if (!card.dataset.order) card.dataset.order = i; });
    cards.forEach(card => {
      const matchesText = card.textContent.toLocaleLowerCase('pt-BR').includes(query);
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const matchesMode = mode === 'all' || (card.dataset.mode || '').split(' ').includes(mode);
      card.classList.toggle('hidden', !(matchesText && matchesCategory && matchesMode));
    });
    const byPrice = (a, b) => Number(a.dataset.price) - Number(b.dataset.price);
    const byOrder = (a, b) => Number(a.dataset.order) - Number(b.dataset.order);
    cards.sort(sortFilter.value === 'price' ? byPrice : byOrder).forEach(card => grid.appendChild(card));
    const visible = cards.filter(card => !card.classList.contains('hidden')).length;
    count.textContent = `${visible} ${visible === 1 ? 'serviço encontrado' : 'serviços encontrados'}`;
    empty.classList.toggle('hidden', visible !== 0);
  }
  [searchInput, categoryFilter, modeFilter, sortFilter].forEach(control => {
    control?.addEventListener('input', filterServices);
    control?.addEventListener('change', filterServices);
  });
  document.getElementById('filter-form')?.addEventListener('reset', () => requestAnimationFrame(filterServices));

  document.querySelectorAll('[data-search-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const value = form.querySelector('input').value;
      showScreen('explorar');
      if (searchInput) searchInput.value = value;
      filterServices();
    });
  });

  // Demonstração local do envio de mensagem dentro da conversa existente.
  document.getElementById('message-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('message-input');
    const value = input.value.trim();
    if (!value) return;
    const message = document.createElement('div');
    message.className = 'message sent';
    message.textContent = value;
    document.querySelector('.chat-messages').appendChild(message);
    input.value = '';
    message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Copiar chave Pix exibida na tela de pagamento.
  document.getElementById('copy-pix')?.addEventListener('click', async event => {
    const value = document.getElementById('pix-key').value;
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = 'Copiado';
    } catch {
      document.getElementById('pix-key').select();
      button.textContent = 'Selecione a chave';
    }
    setTimeout(() => { button.textContent = 'Copiar'; }, 2500);
  });

  // Formulários são apenas demonstrativos no protótipo; não enviam dados a servidor.
  document.querySelectorAll('[data-local-form]').forEach(form => {
    // Nos cadastros, a confirmação precisa ser igual à senha.
    const passwords = form.querySelectorAll('input[type="password"]');
    if (passwords.length === 2) {
      const [password, confirm] = passwords;
      const check = () => confirm.setCustomValidity(confirm.value && password.value !== confirm.value ? 'As senhas não coincidem.' : '');
      password.addEventListener('input', check);
      confirm.addEventListener('input', check);
    }

    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const submitter = event.submitter;
      const next = submitter?.dataset.screen;
      if (next) { showScreen(next); return; }
      // Sem tela de destino (ex.: Salvar / Publicar): confirma visualmente.
      if (submitter) {
        const original = submitter.textContent;
        submitter.textContent = 'Concluído ✓';
        submitter.disabled = true;
        setTimeout(() => { submitter.textContent = original; submitter.disabled = false; }, 1800);
      }
    });
  });

  // "+ Adicionar serviços": leva ao formulário de publicação.
  document.querySelector('[data-scroll-form]')?.addEventListener('click', () => {
    const firstField = document.querySelector('#meus-servicos .panel form input');
    firstField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstField?.focus({ preventScroll: true });
  });

  // Busca inicial: começa na tela de login, preservando o fluxo de autenticação.
  showScreen('login');
})();
