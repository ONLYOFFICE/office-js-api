// This example sets rect diff to square annotation.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
squareAnnot.SetRectDiff([10, 10, 10, 10]);
console.log(`Annot rect diff is: ${squareAnnot.GetRectDiff()}`);