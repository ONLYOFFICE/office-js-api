// This example sets vertices to polygon annotation.
let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polygonAnnot = Api.CreatePolygonAnnot([40, 5, 160, 110], vertices);
polygonAnnot.SetBorderColor(Api.CreateRGBColor(255, 0, 0));
let newVertices = [{x: 100, y: 10}, {x: 150, y: 50}, {x: 50, y: 50}];
polygonAnnot.SetVertices(newVertices)
let page = doc.GetPage(0);
page.AddAnnot(polygonAnnot);
console.log(`We set vertices to polygon annotation`);