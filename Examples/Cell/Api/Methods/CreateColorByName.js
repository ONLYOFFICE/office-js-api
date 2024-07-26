// This example creates a color selecting it from one of the available color presets.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorByName("peachPuff");
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);
builder.SaveFile("xlsx", "CreateColorByName.xlsx");
builder.CloseFile();