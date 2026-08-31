// Center the printed content vertically on the page in a spreadsheet.

// How do I center the worksheet between the top and bottom margins when printing in a spreadsheet?

// Make the printout vertically centered on the page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterVertically(true);
