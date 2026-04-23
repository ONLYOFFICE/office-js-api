// Retrieve the intensity level of a border effect on an annotation in a PDF.

// What is the border effect intensity value for an annotation in a PDF?

// Check the strength of a cloud or other border effect applied to an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect intensity is: ${squareAnnot.GetBorderEffectIntensity()}`);