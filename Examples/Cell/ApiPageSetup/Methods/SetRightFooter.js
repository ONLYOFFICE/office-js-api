// Add right text to the page footer for printing in a spreadsheet.

// How do I put text on the right side of the footer in a spreadsheet?

// Show a right footer when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetRightFooter("Page &P");
