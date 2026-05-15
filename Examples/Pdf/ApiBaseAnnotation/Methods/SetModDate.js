// Record the date when an annotation was last modified in a PDF.

// Update the modification timestamp of an annotation in a PDF.

// Set the last-changed date for an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetModDate(new Date().getTime());