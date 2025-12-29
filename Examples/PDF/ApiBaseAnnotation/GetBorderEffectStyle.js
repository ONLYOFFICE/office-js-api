// This example creates a square annotation and gets its border effect style.
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddAnnot(squareAnnot);
console.log(`Annotation border effect style is: ${squareAnnot.GetBorderEffectStyle()}`);
