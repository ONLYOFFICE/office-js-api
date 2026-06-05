// Reposition where a line annotation begins in a PDF.

// How do I move the starting position of a line in a PDF?

// Update the coordinates for the line's starting location in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetStartPoint({x: 20, y: 20});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start point set to: ${lineAnnot.GetStartPoint()}`);
