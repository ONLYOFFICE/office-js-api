// Get the position coordinates of an annotation in a PDF.

// What are the horizontal and vertical coordinates of an annotation in a PDF?

// Retrieve the X and Y position values from an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
let pos = squareAnnot.GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);