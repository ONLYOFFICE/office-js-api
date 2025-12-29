// This example creates a square annotation and gets its fill color.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetFillColor(Api.CreateRGBColor(255, 0, 0));
let page = doc.GetPage(0);
page.AddAnnot(squareAnnot);
console.log(`Annotation fill color is: ${squareAnnot.GetFillColor()}`);
