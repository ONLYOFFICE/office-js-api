// Add a polygon annotation to a PDF page.

// How do I draw a closed shape with multiple vertices in a PDF?

// Create an annotation with a filled or outlined polygon in a PDF.

let doc = Api.GetDocument();
let polygonAnnot = Api.CreatePolygonAnnot([40, 40, 200, 200], [{x: 100, y: 100}, {x: 150, y: 150}, {x: 100, y: 150}]);
let page = doc.GetPage(0);
page.AddObject(polygonAnnot);