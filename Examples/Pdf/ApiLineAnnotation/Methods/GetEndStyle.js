// Check what kind of ending decoration a line has in a PDF.

// How do I find what arrow or marker is at the end of a line in a PDF?

// Retrieve the line ending style of a line annotation in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End style is: ${lineAnnot.GetEndStyle()}`);