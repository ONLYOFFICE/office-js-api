// Repeat label columns at the left of every printed page in a spreadsheet.

// How do I print the first column on every page in a spreadsheet?

// Keep the left columns visible on each printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleColumns("$A:$A");
