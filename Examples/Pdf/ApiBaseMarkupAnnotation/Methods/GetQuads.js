// Get the highlight area from a markup annotation in a PDF.

// How do I read the highlight coordinates in a PDF?

// Extract the quad coordinates that define the marked region in a PDF.

let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`The markup quads is: ${markupAnnot.GetQuads()}`);