// Check whether row and column headings are printed with the worksheet in a spreadsheet.

// How do I find out if row numbers and column letters will appear on the printout in a spreadsheet?

// Read the print-headings setting before printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintHeadings(true);
let value = pageSetup.GetPrintHeadings();
worksheet.GetRange("A1").SetValue("Print headings: " + value);
