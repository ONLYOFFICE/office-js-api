// Define the bottom page margin for a sheet in a spreadsheet.

// How do I set the bottom margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing below the printed content on each page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetBottomMargin(25.4);
