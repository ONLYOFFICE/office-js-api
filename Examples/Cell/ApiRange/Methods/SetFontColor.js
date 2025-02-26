// This example sets the text color to the cell range.

// How to color a cell text.

// Get a range and apply an RGB color to its text color.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetFontColor(Api.CreateColorFromRGB(255, 111, 61));
oWorksheet.GetRange("A2").SetValue("This is the text with a color set to it");
oWorksheet.GetRange("A4").SetValue("This is the text with a default color");