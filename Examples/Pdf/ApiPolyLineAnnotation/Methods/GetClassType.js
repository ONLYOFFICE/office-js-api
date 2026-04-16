// Check the class type returned by a polyline annotation in a PDF document.

// How do I check what type a polyline annotation object is in a PDF document?

// Retrieve and output the class type string for a polyline annotation in a PDF document.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`Annot class type is: ${polylineAnnot.GetClassType()}`);