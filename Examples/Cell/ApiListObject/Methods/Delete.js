// This example deletes a formatted table and clears its formatting.

// How to remove a table and convert it back to a plain range.

// Unlike Unlist(), Delete() also clears the cell formatting that was applied by the table style.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Before delete, table name:");
worksheet.GetRange("E1").SetValue(table.GetName());
table.Delete();
worksheet.GetRange("D2").SetValue("Table deleted.");
