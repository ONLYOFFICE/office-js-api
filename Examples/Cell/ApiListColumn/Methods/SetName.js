// Rename a column header in a formatted table in a spreadsheet.

// How do I change the label of a table column in a spreadsheet?

// Update a column name to better reflect its contents after restructuring your data in a spreadsheet.

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