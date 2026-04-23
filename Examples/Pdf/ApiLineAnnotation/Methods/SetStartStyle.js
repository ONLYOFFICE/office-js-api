// Customize the start appearance of a line annotation in a PDF.

// How do I change the start style in a PDF?

// Apply a specific line beginning to the annotation in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
lineAnnot.SetStartStyle("rClosedArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start style set to: ${lineAnnot.GetStartStyle()}`);