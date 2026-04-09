// This example checks whether the totals row is shown for a formatted table.

// How to determine if the totals row is visible in a table.

// The totals row appears at the bottom of the table and can display aggregation functions per column.

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
