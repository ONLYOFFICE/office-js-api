// Get vertices from polyline annotation in a PDF document.

// How to get the vertices for a polyline annotation in a PDF document?

// Get the vertices and display the result in a PDF document.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`Polyline vertices are: ${JSON.stringify(polylineAnnot.GetVertices())}`);