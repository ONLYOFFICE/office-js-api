// This example gets a class type and inserts it into the document.

// How to get a class type of ApiDrawing.

// Get a class type of ApiDrawing and display it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDrawing.SetSize(120 * 36000, 70 * 36000);
oDrawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
var sClassType = oDrawing.GetClassType();
oWorksheet.SetColumnWidth(0, 15);
oWorksheet.SetColumnWidth(1, 10);
oWorksheet.GetRange("A1").SetValue("Class Type = " + sClassType);