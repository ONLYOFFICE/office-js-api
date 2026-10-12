// Read the left footer text of a sheet and display it in a cell in a spreadsheet.

// How do I find out what is printed on the left of the footer in a spreadsheet?

// Check the current left footer (including its formatting codes) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftFooter("&D");
let value = pageSetup.GetLeftFooter();
worksheet.GetRange("A1").SetValue("LeftFooter: " + value);
