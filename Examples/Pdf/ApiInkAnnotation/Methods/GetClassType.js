// Get the class type of an ink annotation in a PDF.

// Useful for verifying the category of an ink annotation in a PDF.

// Determine the classification of an ink annotation in a PDF.

let doc = Api.GetDocument();
let inkPaths = [[{x: 328.002, y: 222.017}, {x: 328.648, y: 222.017}, {x: 329.294, y: 222.017}]];
let inkAnnot = Api.CreateInkAnnot([10, 10, 160, 32], inkPaths);
inkAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(inkAnnot);
console.log(`Annot class type is: ${inkAnnot.GetClassType()}`);
