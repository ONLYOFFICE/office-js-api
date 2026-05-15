// Remove a specific data row from a table in a spreadsheet.

// How do I delete a row from a table without affecting the rest of the data in a spreadsheet?

// Target a single row by its position and erase it so the table shrinks accordingly in a spreadsheet.

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