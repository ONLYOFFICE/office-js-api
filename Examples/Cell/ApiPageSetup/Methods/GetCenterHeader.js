// Read the center header text of a sheet and display it in a cell in a spreadsheet.

// How do I find out what is printed on the center of the header in a spreadsheet?

// Check the current center header (including its formatting codes) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterHeader("&A");
let value = pageSetup.GetCenterHeader();
worksheet.GetRange("A1").SetValue("CenterHeader: " + value);
