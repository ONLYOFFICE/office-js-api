// Check whether row stripes are enabled for a formatted table.

// How to determine if alternating row colors are applied to a table in a spreadsheet.

// Row stripes apply alternating background colors to adjacent rows as defined in the table style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Row stripes:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleRowStripes());