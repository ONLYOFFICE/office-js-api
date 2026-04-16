// Set a name to the active sheet in a spreadsheet.

// How to set name of the sheet in a spreadsheet.

// Set name for a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetName("sheet 1");
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Worksheet name: ");
worksheet.GetRange("A1").AutoFit(false, true);
worksheet.GetRange("B1").SetValue(name);