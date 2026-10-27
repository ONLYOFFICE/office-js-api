// Check what color or pattern fills the interior of a shape in a PDF.

// What fill does a custom shape have in a PDF?

// Find out if and how the inside of a shape is filled in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("cloud", 50 * 36000, 50 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let paths = geometry.GetPaths();
let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Paths: " + geometry.GetPathCount() + ", Width: " + path.GetWidth());
paragraph.AddText(", Height: " + path.GetHeight() + ", Stroke: " + path.GetStroke());
paragraph.AddText(", Fill: " + path.GetFill() + ", Array: " + paths.length);
shape.SetPosition(1000000, 1000000);
page.AddObject(shape);