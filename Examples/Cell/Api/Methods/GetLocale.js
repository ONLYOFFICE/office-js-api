// This example shows how to get the current locale ID.
var oWorksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
var nLocale = Api.GetLocale();
oWorksheet.GetRange("A1").SetValue("Locale: " + nLocale);