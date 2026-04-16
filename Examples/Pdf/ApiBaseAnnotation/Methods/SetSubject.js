// Create a square annotation and set subject to it in a PDF document.

// How can I set subject using an annotation in a PDF document?

// Set subject for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetSubject("Annot subject");