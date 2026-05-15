// Add a square border annotation to a PDF page.

// How do I mark a region with a square box in a PDF?

// Display a square annotation at specified coordinates in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);