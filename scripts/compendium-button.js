// Register the module to add the custom button using the header buttons hook
Hooks.on("getActorSheetHeaderButtons", (app, buttons) => {
    // Add the custom compendium browser button
    buttons.unshift({
      class: "open-compendium-browser",
      icon: "fa-solid fa-book-open-reader",
      label: "Open Compendium",
      onclick: () => {
        // Directly open the compendium browser
        new dnd5e.applications.CompendiumBrowser().render(true);
      }
    });
  });
  
