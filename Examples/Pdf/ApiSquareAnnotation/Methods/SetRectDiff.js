// Adjust the spacing around a square annotation in a PDF.

// How do I change the padding of a square annotation in a PDF?

// Modify the margin between an annotation and its border in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
squareAnnot.SetRectDiff([10, 10, 10, 10]);
console.log(`Annot rect diff is: ${squareAnnot.GetRectDiff()}`);