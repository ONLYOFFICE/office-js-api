// Analyzes cloud shape path properties and displays them in cells.
// Shows path count, dimensions, stroke and fill information.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = worksheet.AddShape("cloud", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 2);
let geometry = shape.GetGeometry();
worksheet.GetRange("A3").SetValue("Path count: " + geometry.GetPathCount());
let path = geometry.GetPath(0);
worksheet.GetRange("A4").SetValue("Width: " + path.GetWidth() + ", Height: " + path.GetHeight());
worksheet.GetRange("A5").SetValue("Stroke: " + path.GetStroke() + ", Fill: " + path.GetFill());
let paths = geometry.GetPaths();
worksheet.GetRange("A6").SetValue("Total paths: " + paths.length);