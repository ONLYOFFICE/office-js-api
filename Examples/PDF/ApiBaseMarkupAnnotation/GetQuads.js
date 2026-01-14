// This example gets quads of markup annotation.
let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddAnnot(markupAnnot);
console.log(`The markup quads is: ${markupAnnot.GetQuads()}`);