// Get the vertical position of a shape in a spreadsheet.

// How do I find the top edge coordinate of a drawing in a spreadsheet?

// Read and display the Y position of a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetPosition(2, 5 * 36000, 3, 2 * 36000);
let posY = drawing.GetPosY();
worksheet.GetRange("A1").SetValue("Drawing Y position: " + posY + " EMU");