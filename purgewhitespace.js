const loc = window.location.toString();
const isAvansD2l = loc.indexOf("/d2l/") > -1;
const isBrightspaceCom = loc.indexOf("/apps/") > -1;
const isAvansContent = loc.indexOf("/content/") > -1;

// Base avans site -> https://brightspace.avans.nl/d2l/le/lessons/...
if (isAvansD2l) {
  let navHeader = document
    .querySelector("d2l-navigation-main-header")
    .shadowRoot.querySelector(".d2l-navigation-centerer");
  navHeader.style.maxWidth = "initial";
}

// First iframe, content container -> src="//s.brightspace.com/apps/smart-curriculum/..."
if (isBrightspaceCom) {
  let findRootWrapper = setInterval(function () {
    let rootWrapper = document.querySelector("#root-wrapper");
    if (rootWrapper) {
      rootWrapper.style.maxWidth = "initial";
      clearInterval(findRootWrapper);
    }
  }, 100);
}

// Second iframe, main content -> https://brightspace.avans.nl//content/enforced/...
if (isAvansContent) {
  let findContent = setInterval(function () {
    let content = document.querySelector(".content");
    if (content) {
      let containerFluid = content.querySelector(".container-fluid");
      containerFluid.style.maxWidth = "initial";
      containerFluid.style.padding = "0";

      let row = containerFluid.querySelector("main div.row");
      row.style.maxWidth = "initial";

      let col = row.querySelector("div");
      col.style.width = "initial";
      col.style.margin = "1em";

      clearInterval(findContent);
    }
  }, 100);
}
