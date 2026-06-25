// Check whether the header and footer are scaled with the document when printing in a spreadsheet.

// How do I find out if the header/footer scales with the print scaling in a spreadsheet?

// Read the scale-with-document header/footer setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetScaleWithDocHeaderFooter(true);
let value = pageSetup.GetScaleWithDocHeaderFooter();
worksheet.GetRange("A1").SetValue("Scale header/footer with document: " + value);
