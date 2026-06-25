// Align the header and footer with the page margins for printing in a spreadsheet.

// How do I make the header and footer line up with the left and right page margins in a spreadsheet?

// Keep the header and footer aligned to the page margins instead of the printable area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetAlignMarginsHeaderFooter(true);
