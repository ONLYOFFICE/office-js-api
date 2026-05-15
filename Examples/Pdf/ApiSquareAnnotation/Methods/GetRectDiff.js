// Read the spacing around a square annotation in a PDF.

// How do I find the padding or margin of a square annotation in a PDF?

// Check the distance from the annotation's edges to its borders in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot rect diff is: ${squareAnnot.GetRectDiff()}`);