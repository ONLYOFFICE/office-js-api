// Gets the fill color of a stroke.
// Creates a shape with a colored border and retrieves its fill properties.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let strokeObj = shape.GetLine();
if (strokeObj) {
    let strokeFill = strokeObj.GetFill();
    if (strokeFill) {
        worksheet.GetRange("A1").SetValue("Stroke fill type: " + strokeFill.GetType());
    }
}
