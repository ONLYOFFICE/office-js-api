// Set vertices to polyline annotation in a PDF document.

// How to set vertices for a polyline annotation in a PDF document?

// Set vertices and display the result in a PDF document.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let newVertices = [{x: 100, y: 10}, {x: 150, y: 50}, {x: 50, y: 50}];
polylineAnnot.SetVertices(newVertices)
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`We set vertices to polyline annotation`);