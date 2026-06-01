// Check whether row and column headings are set to print on the active sheet in a spreadsheet.

// How do I find out if row and column labels will appear on printed pages in a spreadsheet?

// Confirm the print-headings setting and write the result to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());