// Obtain the exact boundaries of selected text on a page in a PDF.

// How do I find the coordinates of highlighted text in a PDF?

// Fetch the selection areas to mark them with visual highlights in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({ start: { x: 10, y: 10 }, end: { x: 100, y: 100 } });
let quads = page.GetSelectionQuads();
let annot = Api.CreateHighlightAnnot(quads);
page.AddObject(annot);
console.log('We highlight the selected text on the page');