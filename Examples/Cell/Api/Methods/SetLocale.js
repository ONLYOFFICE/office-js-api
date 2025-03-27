// This example sets a locale to the document.
let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
worksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");