// This example shows how to get the current locale ID.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
var nLocale = Api.GetLocale();
oWorksheet.GetRange("A1").SetValue("Locale: " + nLocale);
builder.SaveFile("xlsx", "GetLocale.xlsx");
builder.CloseFile();