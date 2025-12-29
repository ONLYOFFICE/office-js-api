// This example creates a circle annotation and adds it to the page.
let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddAnnot(circleAnnot);
