// Set rect diff to square annotation in a PDF document.

// How can I set rect diff using a square annotation in a PDF document?

// Set rect diff for a square annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
squareAnnot.SetRectDiff([10, 10, 10, 10]);
console.log(`Annot rect diff is: ${squareAnnot.GetRectDiff()}`);