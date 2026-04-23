// Read the visible name of a table as it appears in the interface in a spreadsheet.

// How do I find out what display name a table has in a spreadsheet?

// Confirm the label a table shows in the Name Box before referencing it elsewhere in a spreadsheet.

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