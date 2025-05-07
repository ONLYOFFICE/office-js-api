// This example recalculates all formulas in the active workbook.

// How to recalculate all formulas in a worksheet.

// Reset all values calculated by formulas.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(1);
worksheet.GetRange("C1").SetValue(2);
let range = worksheet.GetRange("A1");
range.SetValue("=SUM(B1:C1)");
range = worksheet.GetRange("E1");
range.SetValue("=A1+1");
worksheet.GetRange("B1").SetValue(3);
Api.RecalculateAllFormulas();
worksheet.GetRange("A3").SetValue("Formulas from cells A1 and E1 were recalculated with a new value from cell C1.");