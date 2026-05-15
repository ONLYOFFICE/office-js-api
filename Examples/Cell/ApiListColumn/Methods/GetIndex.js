// Find the position number of a column within a formatted table in a spreadsheet.

// How do I get the index of a specific table column in a spreadsheet?

// Determine where a column sits inside a table by reading its one-based position number.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[1];

worksheet.GetRange("D1").SetValue("Column index:");
worksheet.GetRange("E1").SetValue(column.GetIndex());