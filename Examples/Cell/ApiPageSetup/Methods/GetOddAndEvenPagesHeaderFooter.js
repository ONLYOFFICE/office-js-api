// Check whether odd and even pages use different headers and footers in a spreadsheet.

// How do I find out if odd and even pages have separate headers/footers in a spreadsheet?

// Read the odd/even page header/footer setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let isDifferent = pageSetup.GetOddAndEvenPagesHeaderFooter();
worksheet.GetRange("A1").SetValue("Different odd/even headers and footers: " + isDifferent);
