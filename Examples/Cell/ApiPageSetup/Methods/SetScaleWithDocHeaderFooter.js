// Scale the header and footer together with the worksheet when printing in a spreadsheet.

// How do I keep the header/footer font size in sync with the print scaling in a spreadsheet?

// Make the header and footer shrink or grow with the document scale when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetScaleWithDocHeaderFooter(true);
