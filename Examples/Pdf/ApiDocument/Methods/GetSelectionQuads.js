// Get the selection quads from document and highlight it.

// How to get the selection quads for a document?

// Get the selection quads and display the result in a PDF document.

let doc = Api.GetDocument();
doc.SetSelection(0, {x: 10, y: 10}, 0, {x: 100, y: 100});
let docQuads = doc.GetSelectionQuads();
Object.entries(docQuads).forEach(([pageIdx, quads]) => {
    let page = doc.GetPage(pageIdx);
    let annot = Api.CreateHighlightAnnot(quads);
    page.AddObject(annot);
});

console.log('We highlight the selected text on the first page');