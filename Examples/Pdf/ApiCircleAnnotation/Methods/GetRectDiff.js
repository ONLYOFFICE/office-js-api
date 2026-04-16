// Get rect diff of circle annotation in a PDF document.

// How do I get the rect diff in a PDF document?

// Get the rect diff using a circle annotation object in a PDF document.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
console.log(`Annot rect diff is: ${circleAnnot.GetRectDiff()}`);