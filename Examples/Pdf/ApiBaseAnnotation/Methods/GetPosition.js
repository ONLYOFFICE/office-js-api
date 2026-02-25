// This example creates a square annotation and gets its position.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
let pos = squareAnnot.GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
