// Retrieve the style of a border effect applied to an annotation in a PDF.

// What type of border effect is applied to an annotation in a PDF?

// Find out whether an annotation has a cloud, solid, or other border effect style in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect style is: ${squareAnnot.GetBorderEffectStyle()}`);