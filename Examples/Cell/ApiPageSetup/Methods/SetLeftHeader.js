// Add left text to the page header for printing in a spreadsheet.

// How do I put text on the left side of the header in a spreadsheet?

// Show a left header when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftHeader("Confidential");
