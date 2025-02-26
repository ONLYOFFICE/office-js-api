// This example gets an RGB format of a color and inserts it into the table.

// How to get a RGB color format.

// Convert a color to the RGB values.

var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);
var nColor = oColor.GetRGB();
oWorksheet.GetRange("A4").SetValue("Cell color in RGB format: " + nColor);