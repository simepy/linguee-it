chrome.commands.onCommand.addListener(function(command) {
  if (command == "toggle-feature") {
    chrome.tabs.executeScript({
      file: "content-scripts/script.js"
    });
  }
})
