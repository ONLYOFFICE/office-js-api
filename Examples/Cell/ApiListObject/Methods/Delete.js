// Remove a formatted table and erase its styling in a spreadsheet.

// How do I completely delete a table, including its formatting, in a spreadsheet?

// Wipe out a table and leave behind clean, unstyled cells when the table structure is no longer needed in a spreadsheet.

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