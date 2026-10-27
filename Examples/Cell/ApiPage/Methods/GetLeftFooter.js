// Get the left footer section of a specific page type (even or first) in a spreadsheet.

// How do I set the left footer for even pages in a spreadsheet?

// Access the even pages' left footer to give it its own text when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let section = pageSetup.GetEvenPage().GetLeftFooter();
section.SetText("&A");
