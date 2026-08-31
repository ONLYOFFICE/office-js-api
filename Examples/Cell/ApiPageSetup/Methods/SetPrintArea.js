// Limit printing to a specific range (print area) of a worksheet in a spreadsheet.

// How do I print only a selected range instead of the whole sheet in a spreadsheet?

// Define which cells get printed by setting the print area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintArea("A1:D20");
