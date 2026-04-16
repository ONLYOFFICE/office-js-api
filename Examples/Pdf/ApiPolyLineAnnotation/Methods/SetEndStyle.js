// Set line end style to polyline annotation in a PDF document.

// How can I set end style using a polyline annotation in a PDF document?

// Set end style for a polyline annotation in a PDF document.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
polylineAnnot.SetEndStyle("square");
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`We set line end style to: ${polylineAnnot.GetEndStyle()}`);