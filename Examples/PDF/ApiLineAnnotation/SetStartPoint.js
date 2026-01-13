// This example sets start point to line annotation.
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetStartPoint({x: 20, y: 20});
let page = doc.GetPage(0);
page.AddAnnot(lineAnnot);
console.log(`Start point set to: ${lineAnnot.GetEndPoint()}`);