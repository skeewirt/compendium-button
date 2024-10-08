// Register the module and add the custom button to the character sheet
Hooks.on('renderActorSheet5e', (app, html, data) => {
    // Create the button element with only the icon and proper styling
    const button = $(`<a class="header-button control open-compendium-browser" data-tooltip="Open Compendium Browser" aria-label="Open Compendium Browser">
      <i class="fa-solid fa-book-open-reader"></i>
    </a>`);
  
    // Add the button to the header
    html.closest('.window-app').find('.window-header .window-title').after(button);
  
    // Button click event to open the compendium browser
    button.click(() => {
      const compendiumButton = document.querySelector("#compendium > header > div.header-actions.action-buttons.flexrow > button.open-compendium-browser");
      if (compendiumButton) {
        compendiumButton.click();
      } else {
        ui.notifications.warn("Could not find the compendium browser button.");
      }
    });
  });
  