// This example creates a polyline annotation and adds it to the page.
let doc = Api.GetDocument();
let polylineAnnot = Api.CreatePolyLineAnnot([40, 40, 200, 200], [{x: 100, y: 100}, {x: 150, y: 150}, {x: 100, y: 150}]);
let page = doc.GetPage(0);
page.AddAnnot(polylineAnnot);
