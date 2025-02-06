// This example creates a color selecting it from one of the available color presets.
// How to use a color from the preset.
// Find a color by name and use it to change font color
var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorByName("peachPuff");
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);