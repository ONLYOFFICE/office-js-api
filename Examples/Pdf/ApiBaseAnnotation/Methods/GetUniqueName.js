// Get the unique identifier of an annotation in a PDF.

// What is the unique name assigned to an annotation in a PDF?

// Obtain the identifier string that uniquely identifies an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);