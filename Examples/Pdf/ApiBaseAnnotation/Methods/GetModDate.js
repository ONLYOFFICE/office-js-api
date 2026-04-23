// Retrieve the last modification date of an annotation in a PDF.

// When was an annotation last modified in a PDF?

// Check the last update timestamp of an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation mod date is: ${squareAnnot.GetModDate()}`);