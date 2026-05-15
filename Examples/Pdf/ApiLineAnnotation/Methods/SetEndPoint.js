// Change where a line annotation ends in a PDF.

// How do I move the endpoint of a line in a PDF?

// Update the ending position of a line annotation in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetEndPoint({x: 145, y: 20});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End point set to: ${lineAnnot.GetEndPoint()}`);