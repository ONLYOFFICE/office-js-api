// Read the bottom page margin of a sheet and display it in a cell in a spreadsheet.

// How do I find out the current bottom margin of a worksheet in a spreadsheet?

// Check the spacing below the printed content before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetBottomMargin(25.4);
let bottomMargin = pageSetup.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
