// Create a square annotation and set red fill color to it in a PDF document.

// How can I set fill color using an annotation in a PDF document?

// Set fill color for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));