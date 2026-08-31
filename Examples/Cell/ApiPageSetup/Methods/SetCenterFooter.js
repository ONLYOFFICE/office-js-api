// Add centered text to the page footer for printing in a spreadsheet.

// How do I put the page number in the center of the footer in a spreadsheet?

// Show a centered footer with the current page and total page count when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterFooter("Page &P of &N");
