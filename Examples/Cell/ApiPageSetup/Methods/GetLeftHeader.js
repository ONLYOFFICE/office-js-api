// Read the left header text of a sheet and display it in a cell in a spreadsheet.

// How do I find out what is printed on the left of the header in a spreadsheet?

// Check the current left header (including its formatting codes) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftHeader("Confidential");
let value = pageSetup.GetLeftHeader();
worksheet.GetRange("A1").SetValue("LeftHeader: " + value);
