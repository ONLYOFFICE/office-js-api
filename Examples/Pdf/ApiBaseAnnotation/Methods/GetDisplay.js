// Retrieve the display preference setting of an annotation in a PDF.

// How is the visibility of an annotation configured in a PDF?

// Check whether an annotation is displayed or hidden in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation display is: ${squareAnnot.GetDisplay()}`);