// Retrieve the fill color of an annotation in a PDF.

// What color is used to fill an annotation in a PDF?

// Check the background or fill color applied to an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation fill color is: ${squareAnnot.GetFillColor()}`);