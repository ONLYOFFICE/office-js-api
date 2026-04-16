// Get the current locale ID in a spreadsheet.

// How to set and get current locale ID in a spreadsheet.

// Get region ID and insert information into the cell.

let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
let locale = Api.GetLocale();
worksheet.GetRange("A1").SetValue("Locale: " + locale);