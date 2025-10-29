// Analyzes path properties of a cloud shape.
// Retrieves and displays path dimensions, stroke and fill information.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = Api.CreateShape("cloud", 80 * 36000, 80 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
paragraph.AddText("Path count: " + geometry.GetPathCount());
let path = geometry.GetPath(0);
paragraph.AddText(", Width: " + path.GetWidth() + ", Height: " + path.GetHeight());
paragraph.AddText(", Stroke: " + path.GetStroke() + ", Fill: " + path.GetFill());
let paths = geometry.GetPaths();
paragraph.AddText(", Total paths: " + paths.length);
paragraph.AddDrawing(shape);