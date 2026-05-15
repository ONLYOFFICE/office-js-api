// Rotate a drawing by a given angle to change its orientation in a spreadsheet.

// How do I tilt or rotate a shape to a specific angle in a spreadsheet?

// Turn a drawing to a desired degree to adjust how it appears visually in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
drawing.SetRotation(90);
let rotAngle = drawing.GetRotation();
worksheet.GetRange("A1").SetValue("Drawing rotation angle is set to: " + rotAngle + " degrees");