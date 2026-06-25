// Get the first-page header/footer object to customize printing in a spreadsheet.

// How do I set a separate header or footer for the first page in a spreadsheet?

// Access the first page's header and footer to give them their own content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetDifferentFirstPageHeaderFooter(true);
let firstPage = pageSetup.GetFirstPage();
firstPage.GetCenterHeader().SetText("Report title");
