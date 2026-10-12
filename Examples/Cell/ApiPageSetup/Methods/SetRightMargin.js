// Define the right page margin for a sheet in a spreadsheet.

// How do I set the right margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing on the right side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetRightMargin(20);
