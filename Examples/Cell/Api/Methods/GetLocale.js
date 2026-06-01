// Read the active regional language setting and display it in a cell in a spreadsheet.

// How do I find out which locale or language region is currently set in a spreadsheet?

// Confirm the applied locale by printing its identifier into a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
let locale = Api.GetLocale();
worksheet.GetRange("A1").SetValue("Locale: " + locale);