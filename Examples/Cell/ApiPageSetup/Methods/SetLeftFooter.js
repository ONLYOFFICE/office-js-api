// Add left text to the page footer for printing in a spreadsheet.

// How do I put text on the left side of the footer in a spreadsheet?

// Show a left footer when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftFooter("&D");
