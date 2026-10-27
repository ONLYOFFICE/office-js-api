// Redraw the screen so the changes made so far become visible.

// How do I show intermediate results while a macro is still running?

// Write the data, force the recalculation and repaint the canvas.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(10);
worksheet.GetRange("B1").SetValue("=A1*2");
workbook.Calculate();
workbook.Redraw();
worksheet.GetRange("A3").SetValue("The value of B1 is already on the screen: ");
worksheet.GetRange("B3").SetValue(worksheet.GetRange("B1").GetValue());
