// Read the summary function assigned to the totals row of a table column in a spreadsheet.

// How do I check whether a column is set to sum, average, or count in its totals row in a spreadsheet?

// Verify the calculation type before changing it to ensure consistency across table columns in a spreadsheet.

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
column.SetTotalsCalculation("xlTotalsCalculationSum");

worksheet.GetRange("D1").SetValue("Totals calculation:");
worksheet.GetRange("E1").SetValue(column.GetTotalsCalculation());