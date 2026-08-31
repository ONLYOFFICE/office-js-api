// Read the left page margin of a sheet and display it in a cell in a spreadsheet.

// How do I find out the current left margin of a worksheet in a spreadsheet?

// Check the left page margin before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftMargin(20);
let margin = pageSetup.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + margin + " mm");
