// Sets a solid fill color to a shape.
// Creates a rectangle and applies a red fill to it.
let worksheet = Api.GetActiveSheet();
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, Api.CreateNoFill(), stroke, 3, 0, 2, 2);
worksheet.GetRange("A1").SetValue("Original shape with no fill");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0));
shape.SetFill(fill);
worksheet.GetRange("A2").SetValue("Fill changed to red");
