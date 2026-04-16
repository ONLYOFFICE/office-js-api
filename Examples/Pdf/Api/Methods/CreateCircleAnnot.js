// Create a circle annotation and add it to the page.

// How to create the circle annot in a PDF document?

// Create the circle annot using the PDF document API.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);