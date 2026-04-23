// Control the visibility of an annotation in a PDF.

// Toggle whether an annotation appears or stays hidden in a PDF.

// Set the display mode to show or conceal an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetDisplay("hidden");