// Read the formula stored in a cell in a spreadsheet.

// How do I find out what formula a cell contains in a spreadsheet?

// Display a cell's formula as text in another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(1);
worksheet.GetRange("C1").SetValue(2);
let range = worksheet.GetRange("A1");
range.SetValue("=SUM(B1:C1)");
let formula = range.GetFormula();
worksheet.GetRange("A3").SetValue("Formula from cell A1: " + formula);