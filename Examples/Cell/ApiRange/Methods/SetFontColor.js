// This example sets the text color to the cell range.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetFontColor(Api.CreateColorFromRGB(255, 111, 61));
oWorksheet.GetRange("A2").SetValue("This is the text with a color set to it");
oWorksheet.GetRange("A4").SetValue("This is the text with a default color");