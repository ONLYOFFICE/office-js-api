// Analyzes cloud shape path properties on a slide.
// Displays comprehensive path information in a text shape.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = Api.CreateShape("cloud", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let paths = geometry.GetPaths();
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Paths: " + geometry.GetPathCount() + ", Width: " + path.GetWidth());
paragraph.AddText(", Height: " + path.GetHeight() + ", Stroke: " + path.GetStroke());
paragraph.AddText(", Fill: " + path.GetFill() + ", Array: " + paths.length);
shape.SetPosition(1000000, 1000000);
slide.AddObject(shape);