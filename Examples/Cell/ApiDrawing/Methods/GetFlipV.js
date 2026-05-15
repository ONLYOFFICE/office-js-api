// Read the vertical flip state of a drawing in a spreadsheet.

// How do I find out whether a drawing is mirrored top to bottom in a spreadsheet?

// Confirm whether a shape has been reversed along its horizontal axis in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetFlipV(true);
let flip = drawing.GetFlipV();
worksheet.SetColumnWidth(0, 25);
worksheet.GetRange("A1").SetValue("Drawing is flipped vertically: " + flip);