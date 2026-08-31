// Read the top page margin of a sheet and display it in a cell in a spreadsheet.

// How do I find out the current top margin of a worksheet in a spreadsheet?

// Check the top page margin before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetTopMargin(20);
let margin = pageSetup.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + margin + " mm");
