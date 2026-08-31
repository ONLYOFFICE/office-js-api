// Scale the printout to fit a given number of pages tall in a spreadsheet.

// How do I fit all rows onto a fixed number of pages when printing in a spreadsheet?

// Shrink the worksheet so it prints within a fixed number of pages vertically in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFitToPagesTall(2);
