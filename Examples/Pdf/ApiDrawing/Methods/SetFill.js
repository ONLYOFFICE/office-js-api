// Set a solid fill on a drawing object through the base ApiDrawing interface in a PDF.

// The SetFill method works for any graphic object in a PDF, not only shapes.

// Add a rectangle to a PDF page and fill it with a solid blue-grey color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 50 * 36000, 50 * 36000, Api.CreateNoFill(), stroke);
drawing.SetPosition(2000000, 1000000);
page.AddObject(drawing);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(96, 125, 139));
drawing.SetFill(fill);
