// Add right text to the page header for printing in a spreadsheet.

// How do I put text on the right side of the header in a spreadsheet?

// Show a right header when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetRightHeader("&D &T");
