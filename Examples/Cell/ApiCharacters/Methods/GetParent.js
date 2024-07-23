// This example shows how to get the parent object of the specified characters.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var oParent = oCharacters.GetParent();
oParent.SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
builder.SaveFile("xlsx", "GetParent.xlsx");
builder.CloseFile();