// Read the stroke setting applied to a shape's drawing path in a document.

// How do I check whether a shape's path has a visible border in a document?

// Verify the outline state of a path before adjusting its appearance in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("cloud", 80 * 36000, 80 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
paragraph.AddText("Path count: " + geometry.GetPathCount());
let path = geometry.GetPath(0);
paragraph.AddText(", Width: " + path.GetWidth() + ", Height: " + path.GetHeight());
paragraph.AddText(", Stroke: " + path.GetStroke() + ", Fill: " + path.GetFill());
let paths = geometry.GetPaths();
paragraph.AddText(", Total paths: " + paths.length);
paragraph.AddDrawing(shape);