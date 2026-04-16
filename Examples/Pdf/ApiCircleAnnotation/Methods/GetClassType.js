// Find out the class type of a circle annotation object in a PDF document.

// How can I get the class type of a circle annotation in a PDF document?

// Get the class type of a circle annotation and display it in the PDF.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${circleAnnot.GetClassType()}`);