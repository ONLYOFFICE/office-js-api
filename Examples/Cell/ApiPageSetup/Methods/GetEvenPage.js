// Get the even-page header/footer object to customize printing in a spreadsheet.

// How do I set a separate header or footer for even pages in a spreadsheet?

// Access the even pages' header and footer to give them their own content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let evenPage = pageSetup.GetEvenPage();
evenPage.GetCenterHeader().SetText("Even page &P");
