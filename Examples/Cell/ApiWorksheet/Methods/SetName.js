// Rename the active sheet in a spreadsheet.

// How do I give a worksheet a custom name in a spreadsheet?

// Change the tab label of the current sheet to something meaningful in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetName("sheet 1");
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Worksheet name: ");
worksheet.GetRange("A1").AutoFit(false, true);
worksheet.GetRange("B1").SetValue(name);