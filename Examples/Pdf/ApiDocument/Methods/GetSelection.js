// This example gets the current selection in the document.
let doc = Api.GetDocument();
doc.AddPage();
let pageIndex = doc.GetPagesCount() - 1;
let page = doc.GetPage(pageIndex);
let fill = Api.CreateSolidFill(Api.RGB(255, 255, 255));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
page.AddObject(shape);

let quads = page.Search({text: "Lorem selected text", matchCase: true, wholeWords: false});
let firstQuad = quads[0];
let lastQuad = quads[quads.length - 1];
doc.SetSelection({
	start: { page: pageIndex, point: { x: firstQuad[0], y: firstQuad[1] } },
	end:   { page: pageIndex, point: { x: lastQuad[2], y: lastQuad[3] } }
});
let selection = doc.GetSelection();
console.log('Selection start - page: ' + selection.start.page + ', x: ' + selection.start.point.x + ', y: ' + selection.start.point.y);
console.log('Selection end - page: ' + selection.end.page + ', x: ' + selection.end.point.x + ', y: ' + selection.end.point.y);
