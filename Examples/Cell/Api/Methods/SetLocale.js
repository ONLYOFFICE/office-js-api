// Apply a specific regional language setting to the document in a spreadsheet.

// How do I change the language and region used for dates, numbers, and text in a spreadsheet?

// Switch the document locale to match the target audience's region in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
worksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");