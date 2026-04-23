// Customize the end appearance of a line annotation in a PDF.

// How do I change the end style in a PDF?

// Apply a specific line ending to the annotation in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
lineAnnot.SetEndStyle("slash");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End style set to: ${lineAnnot.GetEndStyle()}`);