// How to strikeout a text on a page.

// Ho to create strikeout annotation

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
