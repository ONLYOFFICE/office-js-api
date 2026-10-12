// Repeat header rows at the top of every printed page in a spreadsheet.

// How do I print the header row on every page in a spreadsheet?

// Keep the top rows visible on each printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleRows("$1:$1");
