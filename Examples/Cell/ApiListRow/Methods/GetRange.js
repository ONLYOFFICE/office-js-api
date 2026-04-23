// Retrieve the full cell range occupied by a table row in a spreadsheet.

// How do I get the cells that make up a single row of a table in a spreadsheet?

// Access the row's range to read its address or apply formatting across every cell in that row in a spreadsheet.

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