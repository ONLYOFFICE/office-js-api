// This example specifies whether the current sheet row/column headers must be printed or not.

// How to set whether sheet headings should be printed or not.

// Set a boolean value representing whether to print row/column headings or not.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintHeadings(true);
oWorksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + oWorksheet.GetPrintHeadings());