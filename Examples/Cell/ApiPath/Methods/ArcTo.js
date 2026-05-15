// Draw an arc segment as part of a custom shape path in a spreadsheet.

// How do I add a curved arc to a custom shape outline in a spreadsheet?

// Extend a shape's path with a sweeping arc to round off corners or form circular sections in a spreadsheet.

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
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("rect", 80 * 36000, 80 * 36000, fill, stroke, 3, 0, 3, 0);
shape.SetGeometry(customGeometry);