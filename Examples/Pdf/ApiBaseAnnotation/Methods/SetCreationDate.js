// Record the date when an annotation was created in a PDF.

// Timestamp an annotation with its creation date in a PDF.

// Set the creation date metadata for an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetCreationDate(new Date().getTime());