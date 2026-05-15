// Find the line ending appearance of a polyline marking in a PDF.

// How do I check what the line ending looks like on a polyline marking in a PDF?

// Retrieve the style of the endpoint displayed on a polyline marking in a PDF.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`Default line end style is: ${polylineAnnot.GetEndStyle()}`);