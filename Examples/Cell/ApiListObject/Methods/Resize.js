// Resize a formatted table to a new range.

// How to expand or shrink the range of an existing table in a spreadsheet.

// Resizing to a larger range automatically includes new blank rows or columns in the table structure in a spreadsheet.

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