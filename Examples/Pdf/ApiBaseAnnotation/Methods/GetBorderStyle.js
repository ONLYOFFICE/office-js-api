// Create a square annotation and get its border style in a PDF document.

// How do I get the border style in a PDF document?

// Get the border style using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border style is: ${squareAnnot.GetBorderStyle()}`);