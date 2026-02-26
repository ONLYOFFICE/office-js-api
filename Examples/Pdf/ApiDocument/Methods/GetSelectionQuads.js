// This example gets the selection quads from document and highlights it.
let doc = Api.GetDocument();
doc.SetSelection(0, {x: 10, y: 10}, 0, {x: 100, y: 100});
let docQuads = doc.GetSelectionQuads();
Object.entries(docQuads).forEach(([pageIdx, quads]) => {
    let page = doc.GetPage(pageIdx);
    let annot = Api.CreateHighlightAnnot(quads);
    page.AddObject(annot);
});

console.log('We highlight the selected text on the first page');