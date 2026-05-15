// Extract the text that has been highlighted on a page in a PDF.

// How do I capture the text I've selected in a PDF?

// Retrieve what text is currently marked on a page in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({ start: { x: 10, y: 10 }, end: { x: 100, y: 100 } });
console.log(`The selected text is: ${page.GetSelectedText()}`);