// Make a shape's fill semi-transparent in a spreadsheet.

// Adjust how see-through a shape's fill is in a spreadsheet.

// Fade a shape's solid fill on a worksheet so the cells behind it show through in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
