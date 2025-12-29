// This example creates a square annotation and sets subject to it.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddAnnot(squareAnnot);
squareAnnot.SetSubject("Annot subject");
