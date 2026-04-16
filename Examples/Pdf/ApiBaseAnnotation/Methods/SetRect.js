// Create a square annotation and set rect to twice the initial size in a PDF document.

// How can I set rect using an annotation in a PDF document?

// Set rect for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetRect([10, 10, 320, 64]);