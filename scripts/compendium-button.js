// Register the module to add the custom button using the header buttons hook
Hooks.on("getActorSheetHeaderButtons", (app, buttons) => {
  // Check if the button already exists or if the actor type is appropriate, if needed
  buttons.unshift({
    class: "open-compendium-browser",
    icon: "fa-solid fa-book-open-reader",
    label: "Open Compendium",
    onclick: () => {
      const compendiumButton = document.querySelector("#compendium > header > div.header-actions.action-buttons.flexrow > button.open-compendium-browser");
      if (compendiumButton) {
        compendiumButton.click();
      } else {
        ui.notifications.warn("Could not find the compendium browser button.");
      }
    }
  });
});
