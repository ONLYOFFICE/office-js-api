// This example creates a square annotation and sets rect to twice the initial size.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddAnnot(squareAnnot);
squareAnnot.SetRect([10, 10, 320, 64]);
