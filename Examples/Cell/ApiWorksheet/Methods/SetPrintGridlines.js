// Specify whether the sheet gridlines must be printed or not in a spreadsheet.

// How to set whether sheet gridlines should be printed or not in a spreadsheet.

// Set a boolean value representing whether to print gridlines or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());