const switchMode = () => {
  return document.designMode = document.designMode === 'off' ? 'on' : 'off';
};
const requestForDocumentListener = (request, sender, sendResponse) => {
  if (request.message === 'REQUEST_DOCUMENT') {
    const designMode = switchMode()

    sendResponse({ designMode })
  }
}

browser.runtime.onMessage.addListener(requestForDocumentListener)
