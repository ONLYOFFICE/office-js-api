// Specify whether the current sheet row/column headers must be printed or not in a spreadsheet.

// How to set whether sheet headings should be printed or not in a spreadsheet.

// Set a boolean value representing whether to print row/column headings or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());