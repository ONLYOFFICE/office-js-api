// This example creates a square annotation and gets its dash pattern.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
let page = doc.GetPage(0);
page.AddAnnot(squareAnnot);
console.log(`Annotation dash pattern is: ${squareAnnot.GetDashPattern()}`);
