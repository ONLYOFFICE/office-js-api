// This example gets the selection quads in the document and highlights it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
doc.SetSelection({
	start: { page: 0, point: { x: 10, y: 10 } },
	end:   { page: 0, point: { x: 100, y: 100 } }
});
let quads = doc.GetSelectionQuads();
let annot = Api.CreateHighlightAnnot(quads[0]);
page.AddObject(annot);
console.log('We highlight the selected text in the document');
