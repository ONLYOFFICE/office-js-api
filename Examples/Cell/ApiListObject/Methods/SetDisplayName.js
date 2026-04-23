// Give a table a display name visible in the properties panel in a spreadsheet.

// How do I set the label that appears for a table in a spreadsheet?

// Brand a table with a friendly name so it is easy to spot in the interface in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetDisplayName("SalesTable");

worksheet.GetRange("D1").SetValue("Display name:");
worksheet.GetRange("E1").SetValue(table.GetDisplayName());