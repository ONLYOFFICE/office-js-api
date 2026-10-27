// Set the page orientation to landscape for printing in a spreadsheet.

// How do I switch a worksheet to landscape orientation when printing in a spreadsheet?

// Print the sheet sideways (landscape) instead of upright (portrait) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOrientation("xlLandscape");
