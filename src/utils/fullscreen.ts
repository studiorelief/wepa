function openScreen() {
  const form = document.querySelector('.hero_form');
  if (!form) {
    return;
  }

  const heroPreviousWrappers = document.querySelectorAll('.hero_previous-wrapper');
  if (heroPreviousWrappers.length === 0) {
    return;
  }

  // Stockez le parent d'origine du formulaire
  const originalParent = form.parentElement;
  if (!originalParent) {
    return; // Si originalParent est null, sortir de la fonction
  }

  // Gestion du bouton d'ouverture
  const button = document.querySelector('.open-form');
  if (!button) {
    return;
  }
  button.addEventListener('click', function () {
    const newWrapper = document.querySelector('.open_component');
    if (!newWrapper) {
      return;
    }

    newWrapper.appendChild(form);

    heroPreviousWrappers.forEach((wrapper) => {
      if (wrapper instanceof HTMLElement) {
        // Vérifiez que le wrapper est un HTMLElement
        wrapper.style.display = 'none'; // Masquer lors de l'ouverture
      }
    });
  });

  // Gestion du bouton de fermeture
  const closeButton = document.querySelector('.close-form');
  if (!closeButton) {
    return;
  }
  closeButton.addEventListener('click', function () {
    // Remettre le formulaire à sa place initiale
    originalParent.appendChild(form);

    heroPreviousWrappers.forEach((wrapper) => {
      if (wrapper instanceof HTMLElement) {
        // Vérifiez que le wrapper est un HTMLElement
        wrapper.style.display = 'inline-block'; // Afficher lors de la fermeture
      }
    });
  });
}

export { openScreen };
