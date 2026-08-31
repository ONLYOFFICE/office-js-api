// Read the print area (the range that gets printed) of a worksheet in a spreadsheet.

// How do I find out which range is set as the print area in a spreadsheet?

// Check the current print area (empty means the whole sheet) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintArea("A1:D20");
let printArea = pageSetup.GetPrintArea();
worksheet.GetRange("F1").SetValue("Print area: " + printArea);
