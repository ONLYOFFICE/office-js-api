// Read back the transparency of a shape's fill in a spreadsheet.

// Find out how transparent a shape's fill is in a spreadsheet.

// Check the transparency that was applied to a shape's fill on a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

let content = shape.GetContent();
let paragraph = content.GetElement(0);
let appliedFill = shape.GetFill();
paragraph.AddText("Fill transparency: " + appliedFill.GetTransparent());
