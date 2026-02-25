// This example creates a polygon annotation and adds it to the page.
let doc = Api.GetDocument();
let polygonAnnot = Api.CreatePolygonAnnot([40, 40, 200, 200], [{x: 100, y: 100}, {x: 150, y: 150}, {x: 100, y: 150}]);
let page = doc.GetPage(0);
page.AddObject(polygonAnnot);
