// This example shows how to get the rotation angle of the drawing.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(130 * 36000, 10 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 5 * 36000);
drawing.SetRotation(90);
let rotAngle = drawing.GetRotation();
worksheet.GetRange("A1").SetValue("Drawing rotation angle is: " + rotAngle + " degrees");