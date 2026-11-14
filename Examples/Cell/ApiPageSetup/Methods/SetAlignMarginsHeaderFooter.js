// Stop aligning the header and footer with the page margins for printing in a spreadsheet.

// How do I stop the header and footer from lining up with the left and right page margins in a spreadsheet?

// Let the header and footer use the page edges instead of the page margins in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetAlignMarginsHeaderFooter(false);
