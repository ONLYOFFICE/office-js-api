// Gets the fill properties from a shape and displays detailed information.
// Creates a shape with gradient fill, retrieves it and shows fill details.
let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedFill = shape.GetFill();
if (retrievedFill) {
    worksheet.GetRange("A1").SetValue("Fill type: " + retrievedFill.GetType());
}
