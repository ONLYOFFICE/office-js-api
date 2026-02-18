// This example creates a text annotation and adds it to the page.
let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(textAnnot);
