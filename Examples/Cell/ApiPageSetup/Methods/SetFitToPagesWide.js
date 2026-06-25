// Scale the printout to fit a given number of pages wide in a spreadsheet.

// How do I fit all columns onto one page wide when printing in a spreadsheet?

// Shrink the worksheet so it prints within a fixed number of pages horizontally in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFitToPagesWide(1);
