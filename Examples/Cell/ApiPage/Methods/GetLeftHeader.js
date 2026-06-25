// Get the left header section of a specific page type (even or first) in a spreadsheet.

// How do I set the left header for even pages in a spreadsheet?

// Access the even pages' left header to give it its own text when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let section = pageSetup.GetEvenPage().GetLeftHeader();
section.SetText("Confidential");
