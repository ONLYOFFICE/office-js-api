// Enable or disable gridlines on printed pages in a spreadsheet.

// How do I include or exclude the grid pattern when printing my spreadsheet?

// Specify whether printed output shows the cell boundary lines in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());