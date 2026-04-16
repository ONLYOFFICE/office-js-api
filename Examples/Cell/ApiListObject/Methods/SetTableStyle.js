// Set the style of a formatted table.

// How to apply a built-in style to a table in a spreadsheet.

// Style names follow the pattern "TableStyleLight1", "TableStyleMedium2", "TableStyleDark1", and so on in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetTableStyle("TableStyleMedium2");

worksheet.GetRange("D1").SetValue("Table style:");
worksheet.GetRange("E1").SetValue(table.GetTableStyle());