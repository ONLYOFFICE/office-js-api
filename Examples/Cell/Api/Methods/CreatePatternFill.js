// This example creates a pattern fill to apply to the object using the selected pattern as the object background.
// Create customized pattern to fill background of a shape.
// Set a shape background using a pattern fill.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);