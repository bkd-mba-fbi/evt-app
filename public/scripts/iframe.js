/**
 * This script is executed within the apps' iframe and allows to setup
 * aspects that have to be controlled from within the iframe.
 */

///// iframe resizing /////

/*
 * Observes the size of the HTML element and triggers a message with the new height if the size changes.
 * Can be used to dynamically adjust the height of an iframe.
 */
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const height = entry.contentBoxSize
      ? entry.contentBoxSize[0].blockSize
      : entry.contentRect.height;
    parent.window.postMessage(
      { type: "bkdResize", height },
      window.parent.origin
    ); // TODO target
  }
});

window.onload = () => {
  resizeObserver.observe(document.documentElement);
};
