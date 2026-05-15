// Retrieve the border style of an annotation in a PDF.

// What style does the border use on an annotation in a PDF?

// Determine whether an annotation's border is solid, dashed, or another style in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border style is: ${squareAnnot.GetBorderStyle()}`);