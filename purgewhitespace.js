const loc = window.location.toString();
const isAvansD2l = loc.indexOf("/d2l/") > -1;
const isBrightspaceCom = loc.indexOf("/apps/") > -1;
const isAvansContent = loc.indexOf("/content/") > -1;

const waitForElement = async (selector) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

const waitForProperty = async (obj, prop) => {
  while (obj[prop] === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return obj[prop];
};

// Base avans site -> https://brightspace.avans.nl/d2l/le/lessons/...
if (isAvansD2l) {
  waitForElement("d2l-navigation-main-header").then(async (mainHeader) => {
    const shadowRoot = await waitForProperty(mainHeader, "shadowRoot");
    let navCenterer = shadowRoot.querySelector(".d2l-navigation-centerer");
    navCenterer.style.maxWidth = "initial";
  });

  waitForElement("d2l-navigation-main-footer").then(async (mainFooter) => {
    const shadowRoot = await waitForProperty(mainFooter, "shadowRoot");
    let navFooter = shadowRoot.querySelector(".d2l-navigation-centerer");
    navFooter.style.maxWidth = "initial";
  });

  const d2lPageMain = document.querySelector(".d2l-page-main");
  d2lPageMain.style.maxWidth = "initial";

  const leftCol = d2lPageMain.querySelector(
    ".d2l-homepage .homepage-col-6:nth-child(1)"
  );
  leftCol.style.marginRight = "1em";
}

// First iframe, content container -> src="//s.brightspace.com/apps/smart-curriculum/..."
if (isBrightspaceCom) {
  waitForElement("#root-wrapper").then((rootWrapper) => {
    rootWrapper.style.maxWidth = "initial";

    const $moduleDisplay = rootWrapper.querySelector(".module-display");
    $moduleDisplay.style.width = "95%";
  });
}

// Second iframe, main content -> https://brightspace.avans.nl//content/enforced/...
if (isAvansContent) {
  waitForElement(".content .container-fluid").then((containerFluid) => {
    containerFluid.style.maxWidth = "95%";
    containerFluid.style.padding = "0";

    let row = containerFluid.querySelector("main div.row");
    row.style.maxWidth = "initial";

    let col = row.querySelector("div");
    col.style.width = "initial";
    col.style.margin = "1em";
  });
}
