// Create a square annotation and set thick border width to it in a PDF document.

// How to set border width for an annotation in a PDF document?

// Set border width and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);