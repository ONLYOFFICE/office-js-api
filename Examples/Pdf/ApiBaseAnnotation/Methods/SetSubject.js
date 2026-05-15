// Add a subject or topic label to an annotation in a PDF.

// Categorize an annotation with a subject line in a PDF.

// Assign a subject title to an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetSubject("Annot subject");