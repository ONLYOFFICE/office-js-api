// This example creates a square annotation and gets its border color.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddAnnot(squareAnnot);
console.log(`Annotation border color is: ${squareAnnot.GetBorderColor()}`);
