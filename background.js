const requestForDocument = (tabs) => {
  tabs.forEach(({ id }) => {
    browser.tabs
      .sendMessage(id, { message: 'REQUEST_DOCUMENT' })
      .then(({ designMode }) => {
        browser.browserAction
          .setIcon({ tabId: id, path: `icons/${designMode}.png`})
          .catch(console.error)
      });
  });
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(requestForDocument)
    .catch(console.error);
});

