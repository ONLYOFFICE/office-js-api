// This example sets a locale to the document.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
oWorksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");
builder.SaveFile("xlsx", "SetLocale.xlsx");
builder.CloseFile();