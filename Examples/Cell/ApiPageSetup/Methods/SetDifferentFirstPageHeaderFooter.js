// Use a different header and footer on the first printed page in a spreadsheet.

// How do I set a separate header/footer for the first page when printing in a spreadsheet?

// Enable a distinct first-page header and footer for printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetDifferentFirstPageHeaderFooter(true);
