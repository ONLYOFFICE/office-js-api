// This example sets a locale to the document.
// How to set a region to the document.
// Set or change the locale of the document.
var oWorksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
oWorksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");