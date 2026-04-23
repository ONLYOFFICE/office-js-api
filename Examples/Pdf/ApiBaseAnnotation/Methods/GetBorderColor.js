// Check the border color of an annotation in a PDF.

// How can I find the color of an annotation's outline in a PDF?

// Read the border color value from an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border color is: ${squareAnnot.GetBorderColor()}`);