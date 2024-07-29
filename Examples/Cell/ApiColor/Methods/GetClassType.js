// This example gets a class type and inserts it into the table.
var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);
var sColorClassType = oColor.GetClassType();
oWorksheet.GetRange("A4").SetValue("Class type = " + sColorClassType);