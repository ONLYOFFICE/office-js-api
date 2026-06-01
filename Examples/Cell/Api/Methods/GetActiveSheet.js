// Access the currently open sheet to read or write data in a spreadsheet.

// How do I work with the sheet that is currently visible in a spreadsheet?

// Target the active tab to place values into cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("B2").SetValue("2");
worksheet.GetRange("A3").SetValue("2x2=");
worksheet.GetRange("B3").SetValue("=B1*B2");