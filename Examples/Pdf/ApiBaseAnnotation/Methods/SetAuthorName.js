// Assign an author name to an annotation in a PDF.

// Who created or should be credited for an annotation in a PDF?

// Set the author name property of an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetAuthorName("John Smith");