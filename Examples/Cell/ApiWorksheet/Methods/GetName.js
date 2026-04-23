// Retrieve the name of the active sheet in a spreadsheet.

// How do I read the tab name of the current sheet in a spreadsheet?

// Capture the sheet name and write it to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Name: ");
worksheet.GetRange("B1").SetValue(name);