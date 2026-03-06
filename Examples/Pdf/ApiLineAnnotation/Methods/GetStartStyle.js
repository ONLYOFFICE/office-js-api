// This example gets start line style to line annotation.
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start style is: ${lineAnnot.GetStartStyle()}`);