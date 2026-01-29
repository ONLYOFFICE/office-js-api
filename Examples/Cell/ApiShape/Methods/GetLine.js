// Gets the outline properties from a shape and displays detailed information.
// Creates a shape with a stroke, retrieves it and shows stroke details.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(2.5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
if (retrievedStroke) {
    let row = 1;
    worksheet.GetRange("A" + row++).SetValue("Stroke type: " + retrievedStroke.GetClassType());
    let width = retrievedStroke.GetWidth();
    worksheet.GetRange("A" + row++).SetValue("Width: " + width + " EMU (" + (width / 12700).toFixed(2) + " pt)");
    let strokeFill = retrievedStroke.GetFill();
    if (strokeFill) {
        worksheet.GetRange("A" + row++).SetValue("Fill type: " + strokeFill.GetType());
    }
    let dashType = retrievedStroke.GetDashType();
    worksheet.GetRange("A" + row++).SetValue("Dash type: " + (dashType ? '"' + dashType + '"' : "not set"));
}
