// Center the printed content horizontally on the page in a spreadsheet.

// How do I center the worksheet between the left and right margins when printing in a spreadsheet?

// Make the printout horizontally centered on the page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterHorizontally(true);
