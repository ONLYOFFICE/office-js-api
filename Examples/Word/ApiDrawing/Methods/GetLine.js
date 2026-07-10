// Get the outline of a drawing object through the base ApiDrawing interface in a document.

// GetLine returns the ApiStroke applied to any graphic object, or null when no outline is set.

// Read back the outline width of a drawing and write it into the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let currentLine = drawing.GetLine();
if (currentLine) {
	let resultParagraph = Api.CreateParagraph();
	resultParagraph.AddText("Drawing outline width (EMU): " + currentLine.GetWidth());
	doc.Push(resultParagraph);
}
