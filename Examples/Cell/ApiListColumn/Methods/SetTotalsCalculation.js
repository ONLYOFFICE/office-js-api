// Assign a summary function to the totals row of a table column in a spreadsheet.

// How do I make a table column show a sum or average in its totals row in a spreadsheet?

// Choose the right calculation type for a column to present meaningful totals to readers in a spreadsheet.

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

worksheet.GetRange("D1").SetValue("Totals calculation set to:");
worksheet.GetRange("E1").SetValue(column.GetTotalsCalculation());