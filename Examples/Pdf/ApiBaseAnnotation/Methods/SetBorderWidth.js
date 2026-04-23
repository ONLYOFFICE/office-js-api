// Change the thickness of an annotation's border in a PDF.

// How thick should an annotation border be in a PDF?

// Set the width of the border outline on an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);