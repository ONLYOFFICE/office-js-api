// Highlight selected text regions in a PDF.

// Useful for marking the areas where text is selected in a PDF.

// Get the boundaries of selected text and apply highlighting in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let pageIndex = doc.GetPagesCount() - 1;
let textPage = doc.GetPage(pageIndex);
let fill = Api.CreateSolidFill(Api.RGB(255, 255, 255));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
textPage.AddObject(shape);

let textQuads = textPage.Search({text: "Lorem selected text", matchCase: true, wholeWords: false});
let firstQuad = textQuads[0];
let lastQuad = textQuads[textQuads.length - 1];
doc.SetSelection({
	start: { page: pageIndex, point: { x: firstQuad[0], y: firstQuad[1] } },
	end:   { page: pageIndex, point: { x: lastQuad[2], y: lastQuad[3] } }
});
let docQuads = doc.GetSelectionQuads();
Object.entries(docQuads).forEach(([pageIdx, quads]) => {
    let page = doc.GetPage(Number(pageIdx));
    let annot = Api.CreateHighlightAnnot(quads);
    page.AddObject(annot);
});

console.log('We highlight the selected text on the first page');
