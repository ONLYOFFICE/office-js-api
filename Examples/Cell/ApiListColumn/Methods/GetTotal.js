// This example gets the totals row cell range for a table column.

// How to access the totals cell for a specific column in a formatted table.

// Get the totals row cell range for a column.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTotals(true);

let column = table.GetListColumns()[1];
let totalCell = column.GetTotal();

worksheet.GetRange("D1").SetValue("Total cell address:");
worksheet.GetRange("E1").SetValue(totalCell ? totalCell.GetAddress() : "none");
