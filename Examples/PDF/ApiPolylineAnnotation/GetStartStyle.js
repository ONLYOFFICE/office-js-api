// This example gets line start style of polyline annotation.
let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.CreateRGBColor(255, 0, 0));
let page = doc.GetPage(0);
page.AddAnnot(polylineAnnot);
console.log(`Default line start style is: ${polylineAnnot.GetStartStyle()}`);