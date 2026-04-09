// This example adds a new column to a formatted table.

// How to insert a column into an existing table.

// The new column is appended after the last existing column and automatically inherits the table style.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
let newColumn = table.AddListColumn();

worksheet.GetRange("D1").SetValue("New column name:");
worksheet.GetRange("E1").SetValue(newColumn ? newColumn.GetName() : "none");
worksheet.GetRange("D2").SetValue("Column count:");
worksheet.GetRange("E2").SetValue(table.GetListColumns().length);
