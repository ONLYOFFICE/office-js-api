// This example renames a formatted table.

// How to change the name of a table.

// The name must be unique in the workbook and is used in structured references in formulas.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetName("SalesTable");

worksheet.GetRange("D1").SetValue("Table name:");
worksheet.GetRange("E1").SetValue(table.GetName());
