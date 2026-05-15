// Mark a specific area of text as selected on a page in a PDF.

// How do I highlight a range of text on a page in a PDF?

// Define and activate a text selection within given coordinates in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({ start: { x: 10, y: 10 }, end: { x: 100, y: 100 } });
console.log('We selected the text on the page');