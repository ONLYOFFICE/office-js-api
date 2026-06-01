// Fill a shape's background with a repeating pattern of two colors in a spreadsheet.

// How do I apply a tiled pattern as the background of a shape in a spreadsheet?

// Decorate a shape by covering its surface with a repeated design made from two chosen colors in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreatePatternFill("dashDnDiag", Api.RGB(255, 111, 61), Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);