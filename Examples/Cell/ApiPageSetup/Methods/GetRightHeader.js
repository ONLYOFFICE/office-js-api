// Read the right header text of a sheet and display it in a cell in a spreadsheet.

// How do I find out what is printed on the right of the header in a spreadsheet?

// Check the current right header (including its formatting codes) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetRightHeader("&D &T");
let value = pageSetup.GetRightHeader();
worksheet.GetRange("A1").SetValue("RightHeader: " + value);
