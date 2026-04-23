// Expand or shrink a table to cover a different range of cells in a spreadsheet.

// How do I change which cells a table covers in a spreadsheet?

// Stretch an existing table to include newly added rows or columns in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
worksheet.GetRange("A4").SetValue("Grapes");
worksheet.GetRange("B4").SetValue(200);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.Resize("A1:B4");

worksheet.GetRange("D1").SetValue("New range:");
worksheet.GetRange("E1").SetValue(table.GetRange().GetAddress());