// Get the fill formatting properties from a drawing object through the base ApiDrawing interface in a PDF.

// GetFill returns the ApiFill applied to any graphic object in a PDF, or null when the object has no fill.

// Read back the fill type of a filled rectangle and show it inside the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(96, 125, 139));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
drawing.SetPosition(2000000, 1000000);
page.AddObject(drawing);
const currentFill = drawing.GetFill();
if (currentFill) {
	drawing.GetContent().GetElement(0).AddText("Fill type: " + currentFill.GetType());
}
