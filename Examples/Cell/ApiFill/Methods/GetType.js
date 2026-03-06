// Gets the fill type and displays it.
// Creates shapes with different fill types and shows their types.
let worksheet = Api.GetActiveSheet();

// Solid fill
let solidFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = worksheet.AddShape("rect", 50 * 36000, 30 * 36000, solidFill, stroke, 3, 0, 0, 0);
let fill1 = shape1.GetFill();
worksheet.GetRange("A1").SetValue("Solid fill type: " + fill1.GetType());

// Gradient fill
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let gradientFill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let shape2 = worksheet.AddShape("rect", 50 * 36000, 30 * 36000, gradientFill, stroke, 3, 0, 1, 1);
let fill2 = shape2.GetFill();
worksheet.GetRange("A2").SetValue("Gradient fill type: " + fill2.GetType());

// No fill
let noFill = Api.CreateNoFill();
let shape3 = worksheet.AddShape("rect", 50 * 36000, 30 * 36000, noFill, stroke, 3, 0, 2, 2);
let fill3 = shape3.GetFill();
worksheet.GetRange("A3").SetValue("No fill type: " + fill3.GetType());
