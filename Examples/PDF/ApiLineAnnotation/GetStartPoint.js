// This example gets start point of line annotation.
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddAnnot(lineAnnot);
let startPoint = lineAnnot.GetStartPoint();
console.log(`Start point is: x: ${startPoint.x}, y: ${startPoint.y}`);