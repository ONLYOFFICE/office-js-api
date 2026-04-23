// Read the header label of a table column in a spreadsheet.

// How do I find out what a column in a table is called in a spreadsheet?

// Retrieve the column name to display or compare it with other table headers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[0];

worksheet.GetRange("D1").SetValue("Column name:");
worksheet.GetRange("E1").SetValue(column.GetName());