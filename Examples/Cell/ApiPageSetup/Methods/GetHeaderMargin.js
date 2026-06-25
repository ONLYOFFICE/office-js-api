// Read the header margin of a sheet and display it in a cell in a spreadsheet.

// How do I find out the current header margin (distance to the header) in a spreadsheet?

// Check the spacing reserved for the page header before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetHeaderMargin(12.7);
let headerMargin = pageSetup.GetHeaderMargin();
worksheet.GetRange("A1").SetValue("Header margin: " + headerMargin + " mm");
