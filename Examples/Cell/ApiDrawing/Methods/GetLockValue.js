// This example shows how to get the lock value for the specified lock type of the drawing.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDrawing.SetSize(120 * 36000, 70 * 36000);
oDrawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
oDrawing.SetLockValue("noSelect", true);
var bLockValue = oDrawing.GetLockValue("noSelect");
oWorksheet.GetRange("A1").SetValue("This drawing cannot be selected: " + bLockValue);
builder.SaveFile("xlsx", "GetLockValue.xlsx");
builder.CloseFile();