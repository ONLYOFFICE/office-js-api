// Get the outline of a drawing object through the base ApiDrawing interface in a presentation.

// GetLine returns the ApiStroke applied to any graphic object on a slide, or null when no outline is set.

// Read back the outline width of a drawing and show it inside the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const currentLine = drawing.GetLine();
if (currentLine) {
	drawing.GetContent().GetElement(0).AddText("Outline width (EMU): " + currentLine.GetWidth());
}
