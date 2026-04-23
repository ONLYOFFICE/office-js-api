// Add a circle annotation to highlight an area in a PDF.

// How do I draw a circle annotation in a PDF?

// Mark a region with a circular outline in a PDF.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);