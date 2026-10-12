// Get the center header section of a specific page type (even or first) in a spreadsheet.

// How do I set the centered header for even pages in a spreadsheet?

// Access the even pages' center header to give it its own text when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let evenPage = pageSetup.GetEvenPage();
let centerHeader = evenPage.GetCenterHeader();
centerHeader.SetText("Even page &P");
