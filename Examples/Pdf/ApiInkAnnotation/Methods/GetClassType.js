// Get the class type of an ink annotation in a PDF.

// Useful for verifying the category of an ink annotation in a PDF.

// Determine the classification of an ink annotation in a PDF.

let doc = Api.GetDocument();
let inkPaths = [[{x: 20, y: 28}, {x: 55, y: 14}, {x: 90, y: 28}, {x: 125, y: 14}, {x: 150, y: 28}]];
let inkAnnot = Api.CreateInkAnnot([10, 10, 160, 32], inkPaths);
inkAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(inkAnnot);
console.log(`Annot class type is: ${inkAnnot.GetClassType()}`);
