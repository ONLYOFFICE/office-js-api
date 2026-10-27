// Recalculate the formulas that need recalculation in the active workbook.

// How do I read an up-to-date formula result inside a macro?

// Force the recalculation and show the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(10);
worksheet.GetRange("B1").SetValue("=A1*2");
Api.Calculate();
let value = worksheet.GetRange("B1").GetValue();
worksheet.GetRange("A3").SetValue("Recalculated value of B1: ");
worksheet.GetRange("B3").SetValue(value);
