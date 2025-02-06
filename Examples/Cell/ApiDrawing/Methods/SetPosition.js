// This example changes the position for the drawing object.
// How to change the position of the drawing on the worksheet.
// Move a drawing by setting the position.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDrawing.SetSize(120 * 36000, 70 * 36000);
oDrawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);