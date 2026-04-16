// Set the totals row function for a table column in a spreadsheet.

// How to assign an aggregate function to the totals row of a column in a spreadsheet.

// Set the aggregate function for the totals row of a column in a spreadsheet.

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