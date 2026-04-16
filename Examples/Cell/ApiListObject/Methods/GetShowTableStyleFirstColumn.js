// Check whether the first column highlight is enabled for a formatted table.

// How to determine if special formatting is applied to the first column of a table.

// When enabled, the first column receives the distinct formatting defined by the current table style.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("First column highlight:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleFirstColumn());