// This example converts a formatted table back to a regular range.

// How to remove table formatting while keeping the data intact.

// Unlist keeps the data and cell formatting but removes the table structure and structured references.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Before unlist, table name:");
worksheet.GetRange("E1").SetValue(table.GetName());
table.Unlist();
worksheet.GetRange("D2").SetValue("Table converted to range.");
