// Get the fill color of a stroke. Creates a shape with a colored border and retrieve its fill properties in a spreadsheet.

// How can I get the fill using a stroke in a spreadsheet?

// Get the fill for a stroke in a spreadsheet.

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