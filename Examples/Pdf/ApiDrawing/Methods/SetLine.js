// Set the outline of a drawing object through the base ApiDrawing interface in a PDF.

// SetLine is the base method for the outline and works for any graphic object in a PDF, not only shapes.

// Add a rectangle to a PDF page and give it a dark solid outline.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
drawing.SetPosition(2000000, 1000000);
page.AddObject(drawing);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
drawing.SetLine(outline);
