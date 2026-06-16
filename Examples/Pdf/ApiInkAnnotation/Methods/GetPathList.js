// Get the path list of an ink annotation in a PDF.

// How do I retrieve the path coordinates from an ink drawing in a PDF?

// Read the collection of drawn lines in an ink annotation in a PDF.

let doc = Api.GetDocument();
let inkPaths = [[{x: 328.002, y: 222.017}, {x: 328.648, y: 222.017}, {x: 329.294, y: 222.017}]];
let inkAnnot = Api.CreateInkAnnot([10, 10, 160, 32], inkPaths);
inkAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(inkAnnot);
console.log(`The ink pathList is: ${JSON.stringify(inkAnnot.GetPathList())}`);
