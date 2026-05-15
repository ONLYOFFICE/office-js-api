// Assign a unique identifier to an annotation in a PDF.

// Give an annotation a distinct name for reference in a PDF.

// Set a unique name to distinguish an annotation from others in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetUniqueName("Square annot");