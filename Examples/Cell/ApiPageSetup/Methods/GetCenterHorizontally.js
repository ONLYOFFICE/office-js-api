// Check whether the printed content is centered horizontally on the page in a spreadsheet.

// How do I find out if the worksheet is horizontally centered when printing in a spreadsheet?

// Read the horizontal centering setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterHorizontally(true);
let isCentered = pageSetup.GetCenterHorizontally();
worksheet.GetRange("A1").SetValue("Centered horizontally: " + isCentered);
