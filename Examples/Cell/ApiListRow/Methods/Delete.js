// This example deletes a data row from a formatted table.

// How to remove a row from an existing table.

// Delete a row from the table.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("B4").SetValue(80);
let table = worksheet.AddListObject("xlSrcRange", "A1:B4");

let row = table.GetListRows()[1];
row.Delete();

worksheet.GetRange("D1").SetValue("Row count after delete:");
worksheet.GetRange("E1").SetValue(table.GetListRows().length);
