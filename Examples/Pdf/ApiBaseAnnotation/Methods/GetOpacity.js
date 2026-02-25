// This example creates a square annotation and gets its opacity.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation opacity is: ${squareAnnot.GetOpacity()}`);
