// Retrieve corner points of a polygon marking in a PDF.

// How do I find the corner points of a polygon marking in a PDF?

// Extract all coordinates that define the shape of a polygon marking in a PDF.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polygonAnnot = Api.CreatePolygonAnnot([40, 5, 160, 110], vertices);
polygonAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polygonAnnot);
console.log(`Polygon vertices are: ${JSON.stringify(polygonAnnot.GetVertices())}`);