// This example shows how to get the array formula of a range.

// How to get an array formula value.

// Get a range, get its array formula value and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:A3").SetFormulaArray("={1;2;3}");
let value = worksheet.GetRange("A1").GetFormulaArray();
worksheet.GetRange("A4").SetValue("Array formula of the cell A1: ");
worksheet.GetRange("B4").SetValue("'" + value);
value = worksheet.GetRange("A2").GetFormulaArray();
worksheet.GetRange("A5").SetValue("Array formula of the cell A2: ");
worksheet.GetRange("B5").SetValue("'" + value);
value = worksheet.GetRange("A3").GetFormulaArray();
worksheet.GetRange("A6").SetValue("Array formula of the cell A3: ");
worksheet.GetRange("B6").SetValue("'" + value);