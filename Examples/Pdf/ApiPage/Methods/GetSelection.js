// Get the current selection on a page in a PDF.
let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
let fill = Api.CreateSolidFill(Api.RGB(255, 255, 255));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
page.AddObject(shape);

let quads = page.Search({text: "Lorem selected text", matchCase: true, wholeWords: false});
let firstQuad = quads[0];
let lastQuad = quads[quads.length - 1];
page.SetSelection({ start: { x: firstQuad[0], y: firstQuad[1] }, end: { x: lastQuad[2], y: lastQuad[3] } });
let selection = page.GetSelection();
console.log('Selection start - x: ' + selection.start.x + ', y: ' + selection.start.y);
console.log('Selection end - x: ' + selection.end.x + ', y: ' + selection.end.y);
