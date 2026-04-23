// Read whether the totals row is visible at the bottom of a table in a spreadsheet.

// How do I check if a table is showing its summary totals row in a spreadsheet?

// Confirm the totals row is present before relying on its aggregated values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Show totals:");
worksheet.GetRange("E1").SetValue(table.GetShowTotals());