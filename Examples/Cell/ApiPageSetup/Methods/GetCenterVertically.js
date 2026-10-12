// Check whether the printed content is centered vertically on the page in a spreadsheet.

// How do I find out if the worksheet is vertically centered when printing in a spreadsheet?

// Read the vertical centering setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterVertically(true);
let isCentered = pageSetup.GetCenterVertically();
worksheet.GetRange("A1").SetValue("Centered vertically: " + isCentered);
