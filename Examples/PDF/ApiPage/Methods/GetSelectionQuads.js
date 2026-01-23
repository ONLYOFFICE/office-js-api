// This example gets the selection quads on the page and highlights it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
let quads = page.GetSelectionQuads();
let annot = Api.CreateHighlightAnnot(quads);
page.AddObject(annot);
console.log('We highlight the selected text on the page');