// Set line start style to polyline annotation in a PDF document.

// How do I set start style in a PDF document?

// Set start style using a polyline annotation object in a PDF document.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
polylineAnnot.SetStartStyle("circle");
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`We set line start style to: ${polylineAnnot.GetStartStyle()}`);