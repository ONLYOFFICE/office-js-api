// Convert a formatted table back to a plain data range in a spreadsheet.

// How do I remove table formatting while keeping the data intact in a spreadsheet?

// Strip the table structure from a range so the data remains but the table features and named references are gone in a spreadsheet.

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