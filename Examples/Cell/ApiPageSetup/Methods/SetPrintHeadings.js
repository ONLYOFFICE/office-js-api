// Print row and column headings together with the worksheet content in a spreadsheet.

// How do I include row numbers and column letters on the printout in a spreadsheet?

// Show the row and column headings when printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintHeadings(true);
