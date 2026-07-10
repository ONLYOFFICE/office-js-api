// Get the fill formatting properties from a drawing object through the base ApiDrawing interface in a presentation.

// GetFill returns the ApiFill applied to any graphic object on a slide, or null when the object has no fill.

// Read back the fill type of a filled rectangle and show it inside the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(96, 125, 139));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const currentFill = drawing.GetFill();
if (currentFill) {
	drawing.GetContent().GetElement(0).AddText("Fill type: " + currentFill.GetType());
}
