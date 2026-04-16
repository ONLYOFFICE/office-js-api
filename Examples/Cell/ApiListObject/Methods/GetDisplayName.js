// Get the display name of a formatted table.

// How to read the display name of a table in a spreadsheet.

// The display name is the label shown in the Name Box and table properties panel in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Display name:");
worksheet.GetRange("E1").SetValue(table.GetDisplayName());