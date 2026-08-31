// Print cell gridlines together with the worksheet content in a spreadsheet.

// How do I make gridlines appear on the printout in a spreadsheet?

// Show the cell gridlines when printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintGridlines(true);
