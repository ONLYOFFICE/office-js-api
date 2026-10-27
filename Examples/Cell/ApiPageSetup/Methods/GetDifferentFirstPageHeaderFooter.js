// Check whether the first printed page uses a different header and footer in a spreadsheet.

// How do I find out if the first page has its own header/footer in a spreadsheet?

// Read the different-first-page header/footer setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetDifferentFirstPageHeaderFooter(true);
let isDifferent = pageSetup.GetDifferentFirstPageHeaderFooter();
worksheet.GetRange("A1").SetValue("Different first page header/footer: " + isDifferent);
