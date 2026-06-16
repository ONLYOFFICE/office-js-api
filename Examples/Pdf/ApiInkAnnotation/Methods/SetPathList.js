// Set the path list of an ink annotation in a PDF.

// How do I change the lines that make up an ink drawing in a PDF?

// Replace the path coordinates for an ink annotation in a PDF.

let doc = Api.GetDocument();
let inkPaths = [[{x: 328.002, y: 222.017}, {x: 328.648, y: 222.017}, {x: 329.294, y: 222.017}]];
let inkAnnot = Api.CreateInkAnnot([10, 10, 160, 32], inkPaths);
inkAnnot.SetBorderColor(Api.RGB(255, 0, 0));
inkAnnot.SetPathList([[{x: 10, y: 10}, {x: 50, y: 50}]]);
let page = doc.GetPage(0);
page.AddObject(inkAnnot);
console.log("We set path list to ink annot");
