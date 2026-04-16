// Create a square annotation and set opacity to it in a PDF document.

// How do I set opacity in a PDF document?

// Set opacity using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
squareAnnot.SetOpacity(50);