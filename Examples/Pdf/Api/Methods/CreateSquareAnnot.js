// Create a square annotation and add it to the page.

// How do I create the square annot in a PDF document?

// Create the square annot and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);