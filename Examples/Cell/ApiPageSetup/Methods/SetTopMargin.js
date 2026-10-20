// Define the top page margin for a sheet in a spreadsheet.

// How do I set the top margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing on the top side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetTopMargin(20);
