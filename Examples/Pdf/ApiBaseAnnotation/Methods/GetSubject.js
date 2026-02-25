// This example creates a square annotation and gets its subject.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetSubject("Annot subject");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation subject is: ${squareAnnot.GetSubject()}`);
