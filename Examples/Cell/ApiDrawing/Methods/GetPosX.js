// Get the horizontal position of a shape in a spreadsheet.

// How do I find the left edge coordinate of a drawing in a spreadsheet?

// Read and display the X position of a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetPosition(2, 5 * 36000, 3, 2 * 36000);
let posX = drawing.GetPosX();
worksheet.GetRange("A1").SetValue("Drawing X position: " + posX + " EMU");