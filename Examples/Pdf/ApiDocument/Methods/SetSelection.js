// Select a text area in a PDF.

// How do I mark a portion of text as selected in a PDF?

// Choose a region of text and mark it as selected in a PDF.

let doc = Api.GetDocument();
doc.SetSelection(0, {x: 10, y: 10}, 0, {x: 100, y: 100});
console.log('We selected the text on the page');