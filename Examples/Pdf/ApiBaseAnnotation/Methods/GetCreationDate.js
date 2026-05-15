// Retrieve the date when an annotation was created in a PDF.

// When was an annotation added to the PDF?

// Check the creation timestamp of an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation creation date is: ${squareAnnot.GetCreationDate()}`);