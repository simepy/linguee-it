browser.commands.onCommand.addListener(function(command) {
  if (command == "toggle-feature") {
    browser.tabs.executeScript({
      file: "popup/contentScript.js"
    });
  }
})
