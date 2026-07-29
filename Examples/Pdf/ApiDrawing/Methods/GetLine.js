// Get the outline of a drawing object through the base ApiDrawing interface in a PDF.

// GetLine returns the ApiStroke applied to any graphic object in a PDF, or null when no outline is set.

// Read back the outline width of a drawing and show it inside the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
const drawing = Api.CreateShape("rect", 50 * 36000, 50 * 36000, fill, stroke);
drawing.SetPosition(2000000, 1000000);
page.AddObject(drawing);
const currentLine = drawing.GetLine();
if (currentLine) {
	drawing.GetContent().GetElement(0).AddText("Outline width (EMU): " + currentLine.GetWidth());
}
