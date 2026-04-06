// This example shows how to flip the drawing horizontally.

// How to set the horizontal flip property of the shape.

// Create a drawing and flip it horizontally.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetFlipH(true);
let flip = drawing.GetFlipH();
worksheet.SetColumnWidth(0, 30);
worksheet.GetRange("A1").SetValue("Drawing is flipped horizontally: " + flip);
