// Stop scaling the header and footer together with the worksheet when printing in a spreadsheet.

// How do I keep the header/footer font size fixed regardless of the print scaling in a spreadsheet?

// Keep the header and footer at their own size when the document is scaled for printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetScaleWithDocHeaderFooter(false);
