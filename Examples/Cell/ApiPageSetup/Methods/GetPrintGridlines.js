// Check whether cell gridlines are printed with the worksheet in a spreadsheet.

// How do I find out if gridlines will appear on the printout in a spreadsheet?

// Read the print-gridlines setting before printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintGridlines(true);
let value = pageSetup.GetPrintGridlines();
worksheet.GetRange("A1").SetValue("Print gridlines: " + value);
