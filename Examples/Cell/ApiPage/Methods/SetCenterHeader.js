// Set the centered header text for a specific page type (even or first) in a spreadsheet.

// How do I put the page number in the center header of even pages in a spreadsheet?

// Give even or first pages their own centered header when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
let evenPage = pageSetup.GetEvenPage();
evenPage.SetCenterHeader("Even page &P");
