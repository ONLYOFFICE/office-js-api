// Set the paper size used when printing a worksheet in a spreadsheet.

// How do I switch the print paper size to A4 (or Letter, A3, ...) in a spreadsheet?

// Choose the paper format for printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPaperSize("xlPaperA4");
