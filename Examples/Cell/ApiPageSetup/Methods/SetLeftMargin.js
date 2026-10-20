// Define the left page margin for a sheet in a spreadsheet.

// How do I set the left margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing on the left side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftMargin(20);
