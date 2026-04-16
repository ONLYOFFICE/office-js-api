// Retrieve the class type of a circle annotation in a PDF document.

// How to identify the class type of a circle annotation in a PDF document?

// Obtain the class type identifier of a circle annotation object in a PDF document.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${circleAnnot.GetClassType()}`);