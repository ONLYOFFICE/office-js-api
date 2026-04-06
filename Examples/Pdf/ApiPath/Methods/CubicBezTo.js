// Creates a complex curved shape using various bezier and arc commands.
// Demonstrates different curve types in a single path on a page.
const doc = Api.GetDocument();
const page = doc.GetPage(0);

let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(120 * 36000);
path.SetHeight(120 * 36000);
path.MoveTo(0, 60 * 36000);
path.CubicBezTo(0, 0, 60 * 36000, 0, 60 * 36000, 60 * 36000);
path.QuadBezTo(120 * 36000, 60 * 36000, 120 * 36000, 120 * 36000);
path.ArcTo(60 * 36000, 60 * 36000, 0, 10800000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("rect", 120 * 36000, 120 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);