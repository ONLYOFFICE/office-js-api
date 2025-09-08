// Creates a complex curve shape using different bezier and arc commands.
// Combines multiple curve types in a single path.
let worksheet = Api.GetActiveSheet();
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(80 * 36000);
path.SetHeight(80 * 36000);
path.MoveTo(0, 40 * 36000);
path.CubicBezTo(0, 0, 40 * 36000, 0, 40 * 36000, 40 * 36000);
path.QuadBezTo(80 * 36000, 40 * 36000, 80 * 36000, 80 * 36000);
path.ArcTo(40 * 36000, 40 * 36000, 0, 10800000);
path.Close();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = worksheet.AddShape("rect", 80 * 36000, 80 * 36000, fill, stroke, 3, 0, 3, 0);
shape.SetGeometry(customGeometry);