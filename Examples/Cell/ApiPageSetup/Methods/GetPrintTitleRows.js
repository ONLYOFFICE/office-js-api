// Read the rows repeated at the top of each printed page in a spreadsheet.

// How do I find out which rows repeat on every printed page in a spreadsheet?

// Check the print title rows before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleRows("$1:$1");
let rows = pageSetup.GetPrintTitleRows();
worksheet.GetRange("D1").SetValue("Print title rows: " + rows);
