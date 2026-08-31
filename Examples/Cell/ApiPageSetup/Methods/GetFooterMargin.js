// Read the footer margin of a sheet and display it in a cell in a spreadsheet.

// How do I find out the current footer margin (distance to the footer) in a spreadsheet?

// Check the spacing reserved for the page footer before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFooterMargin(12.7);
let footerMargin = pageSetup.GetFooterMargin();
worksheet.GetRange("A1").SetValue("Footer margin: " + footerMargin + " mm");
