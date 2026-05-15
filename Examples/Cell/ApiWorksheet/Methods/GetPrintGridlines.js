// Check whether cell gridlines are set to print on the active sheet in a spreadsheet.

// How do I find out if gridlines will appear on printed pages in a spreadsheet?

// Verify the print-gridlines setting and display the result in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());