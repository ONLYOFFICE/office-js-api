// Renames a table column in a spreadsheet.

// How to change the header text of a column in a formatted table.

// Rename a column in the table in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[0];
column.SetName("Item");

worksheet.GetRange("D1").SetValue("New column name:");
worksheet.GetRange("E1").SetValue(column.GetName());