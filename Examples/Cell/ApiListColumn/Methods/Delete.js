// Remove a column from a formatted table in a spreadsheet.

// How do I delete a specific column from a table in a spreadsheet?

// Shrink a table by permanently dropping one of its columns along with all its data.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("C1").SetValue("Stock");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("C2").SetValue(50);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
worksheet.GetRange("C3").SetValue(30);
let table = worksheet.AddListObject("xlSrcRange", "A1:C3");

let column = table.GetListColumns()[2];
column.Delete();

worksheet.GetRange("E1").SetValue("Column count after delete:");
worksheet.GetRange("F1").SetValue(table.GetListColumns().length);