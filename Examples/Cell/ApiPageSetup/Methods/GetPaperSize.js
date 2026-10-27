// Read the paper size used when printing a worksheet in a spreadsheet.

// How do I find out the print paper size of a worksheet in a spreadsheet?

// Check the current paper format before printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPaperSize("xlPaperA4");
let paperSize = pageSetup.GetPaperSize();
worksheet.GetRange("A1").SetValue("Paper size: " + paperSize);
