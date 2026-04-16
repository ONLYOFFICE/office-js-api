// Specify whether the sheet row/column headers must be displayed or not in a spreadsheet.

// How to set whether sheet headings should be displayed or not in a spreadsheet.

// Set a boolean value representing whether to display row/column headings or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
worksheet.SetDisplayHeadings(false);