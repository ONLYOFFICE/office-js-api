// Locate the totals row cell for a specific table column in a spreadsheet.

// How do I find the summary cell at the bottom of a table column in a spreadsheet?

// Target the totals cell directly to read or update the column summary value in a spreadsheet.

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