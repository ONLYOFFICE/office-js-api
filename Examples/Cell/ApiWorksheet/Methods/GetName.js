// Get a sheet name in a spreadsheet.

// How to get name of the sheet in a spreadsheet.

// Get a sheet name using the worksheet API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Name: ");
worksheet.GetRange("B1").SetValue(name);