/* Rozbalovací karty menu.
   Každá karta se otevírá a zavírá samostatně.
   Chceš, aby se po otevření jedné ostatní zavřely? Přepni na true. */
const MENU_ACCORDION_EXCLUSIVE = false;

(() => {
  const catalog = document.querySelector('.menu-catalog');
  if (!catalog) return;

  const cards = Array.from(catalog.querySelectorAll('.menu-category'));
  const items = [];

  const setOpen = (item, open) => {
    item.card.classList.toggle('is-open', open);
    item.button.setAttribute('aria-expanded', String(open));
  };

  /* ---------- 1) Rozbalovací karty ---------- */
  cards.forEach((card, index) => {
    const head = card.querySelector('.menu-category-head');
    const title = head && head.querySelector('h2');
    if (!head || !title) return;

    // Vše za hlavičkou (produkty + poznámka) přesuneme do skládacího panelu
    const panel = document.createElement('div');
    panel.className = 'menu-panel';
    panel.id = `menu-panel-${index}`;

    const inner = document.createElement('div');
    inner.className = 'menu-panel-inner';
    panel.appendChild(inner);

    while (head.nextSibling) inner.appendChild(head.nextSibling);
    card.appendChild(panel);

    // Nadpis h2 zůstane, uvnitř něj bude tlačítko
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'menu-accordion-trigger';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', panel.id);

    const label = document.createElement('span');
    label.textContent = title.textContent.trim();

    const icon = document.createElement('span');
    icon.className = 'menu-accordion-icon';
    icon.setAttribute('aria-hidden', 'true');

    button.append(label, icon);
    title.textContent = '';
    title.appendChild(button);

    card.classList.add('is-accordion');

    const item = { card, button };
    items.push(item);

    button.addEventListener('click', () => {
      const willOpen = !card.classList.contains('is-open');
      if (willOpen && MENU_ACCORDION_EXCLUSIVE) {
        items.forEach((other) => { if (other !== item) setOpen(other, false); });
      }
      setOpen(item, willOpen);
    });
  });

  /* ---------- 2) Dva nezávislé sloupce na desktopu ----------
     Karty už nesdílí společné řádky, takže otevření jedné
     neroztáhne ani neposune kartu vedle ní. Na užším displeji
     se vrátí jeden sloupec v původním pořadí. */
  const wide = window.matchMedia('(min-width: 981px)');
  const columns = [document.createElement('div'), document.createElement('div')];
  columns.forEach((col) => { col.className = 'menu-col'; });

  const layout = () => {
    if (wide.matches) {
      cards.forEach((card, i) => columns[i % 2].appendChild(card));
      columns.forEach((col) => catalog.appendChild(col));
      catalog.classList.add('has-columns');
    } else {
      cards.forEach((card) => catalog.appendChild(card));
      columns.forEach((col) => col.remove());
      catalog.classList.remove('has-columns');
    }
  };

  layout();
  wide.addEventListener('change', layout);
})();