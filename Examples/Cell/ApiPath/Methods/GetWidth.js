// Read the width of a custom shape path and display it in a spreadsheet.

// How do I check how wide a shape path is in a spreadsheet?

// Inspect the horizontal size of a drawn path to verify its dimensions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("cloud", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 2);
let geometry = shape.GetGeometry();
worksheet.GetRange("A3").SetValue("Path count: " + geometry.GetPathCount());
let path = geometry.GetPath(0);
worksheet.GetRange("A4").SetValue("Width: " + path.GetWidth() + ", Height: " + path.GetHeight());
worksheet.GetRange("A5").SetValue("Stroke: " + path.GetStroke() + ", Fill: " + path.GetFill());
let paths = geometry.GetPaths();
worksheet.GetRange("A6").SetValue("Total paths: " + paths.length);