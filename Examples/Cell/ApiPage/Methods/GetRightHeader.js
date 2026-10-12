// Get the right header section of a specific page type (even or first) in a spreadsheet.

// How do I set the right header for even pages in a spreadsheet?

// Access the even pages' right header to give it its own text when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let section = pageSetup.GetEvenPage().GetRightHeader();
section.SetText("&D");
