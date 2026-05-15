// Find where a line annotation begins in a PDF.

// How do I find the starting position of a line in a PDF?

// Retrieve the coordinates of the line's starting point in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
let startPoint = lineAnnot.GetStartPoint();
console.log(`Start point is: x: ${startPoint.x}, y: ${startPoint.y}`);