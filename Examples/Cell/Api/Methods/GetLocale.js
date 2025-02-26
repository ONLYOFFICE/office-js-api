// This example shows how to get the current locale ID.

// How to set and get current locale ID.

// Get region ID and insert information into the cell.

var oWorksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
var nLocale = Api.GetLocale();
oWorksheet.GetRange("A1").SetValue("Locale: " + nLocale);