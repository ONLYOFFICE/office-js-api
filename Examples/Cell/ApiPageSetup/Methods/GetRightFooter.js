// Read the right footer text of a sheet and display it in a cell in a spreadsheet.

// How do I find out what is printed on the right of the footer in a spreadsheet?

// Check the current right footer (including its formatting codes) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetRightFooter("Page &P");
let value = pageSetup.GetRightFooter();
worksheet.GetRange("A1").SetValue("RightFooter: " + value);
