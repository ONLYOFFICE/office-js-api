// Get the center footer section of a specific page type (even or first) in a spreadsheet.

// How do I set the center footer for even pages in a spreadsheet?

// Access the even pages' center footer to give it its own text when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let section = pageSetup.GetEvenPage().GetCenterFooter();
section.SetText("Page &P of &N");
