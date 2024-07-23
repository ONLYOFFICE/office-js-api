// This example creates an RGB color setting the appropriate values for the red, green and blue color components.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);
builder.SaveFile("xlsx", "CreateColorFromRGB.xlsx");
builder.CloseFile();