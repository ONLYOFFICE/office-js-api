// Get the page orientation in a spreadsheet.

// How to get orientation of the sheet in a spreadsheet.

// Get a sheet orientation using the worksheet API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);