// This example creates a square annotation and sets creation date to it.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddAnnot(squareAnnot);
squareAnnot.SetCreationDate(new Date().getTime());
