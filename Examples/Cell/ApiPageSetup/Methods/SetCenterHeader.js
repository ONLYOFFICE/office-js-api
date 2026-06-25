// Add center text to the page header for printing in a spreadsheet.

// How do I put text on the center side of the header in a spreadsheet?

// Show a center header when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterHeader("&A");
