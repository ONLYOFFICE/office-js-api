// This example gets the range of a data row in a formatted table.

// How to retrieve the full row range spanning all table columns.

// Get the range of a row spanning all table columns.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let row = table.GetListRows()[0];
let rowRange = row.GetRange();

worksheet.GetRange("D1").SetValue("Row range address:");
worksheet.GetRange("E1").SetValue(rowRange.GetAddress());
