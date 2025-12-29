// This example creates a line annotation and adds it to the page.
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 11, y: 11}, {x: 155, y: 25});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddAnnot(lineAnnot);
