// This example creates a square annotation and gets its unique name.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddAnnot(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);
