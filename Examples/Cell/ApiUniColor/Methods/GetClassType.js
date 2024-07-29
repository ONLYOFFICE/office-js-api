// This example gets a class type and pastes it into the presentation.
var oWorksheet = Api.GetActiveSheet();
var oPresetColor = Api.CreatePresetColor("peachPuff");
var oGs1 = Api.CreateGradientStop(oPresetColor, 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
var sClassType = oPresetColor.GetClassType();
oWorksheet.SetColumnWidth(0, 15);
oWorksheet.SetColumnWidth(1, 10);
oWorksheet.GetRange("A1").SetValue("Class Type = ");
oWorksheet.GetRange("B1").SetValue(sClassType);