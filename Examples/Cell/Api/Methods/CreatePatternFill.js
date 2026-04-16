// Create a pattern fill to apply to the object using the selected pattern as the object background in a spreadsheet.

// Create customized pattern to fill background of a shape in a spreadsheet.

// Set a shape background using a pattern fill in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreatePatternFill("dashDnDiag", Api.RGB(255, 111, 61), Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);