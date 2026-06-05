// Get the internal identifier of an annotation in a PDF.

// How do I retrieve an annotation's internal ID?

// Create an annotation and print its internal ID.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
page.AddObject(squareAnnot);

console.log(`Annotation internal ID is: ${squareAnnot.GetInternalId()}`);
