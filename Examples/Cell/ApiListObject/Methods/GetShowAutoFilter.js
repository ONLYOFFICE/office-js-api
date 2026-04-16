// Check whether the AutoFilter is shown for a formatted table.

// How to determine if the AutoFilter is enabled on a table in a spreadsheet.

// When false, the AutoFilter and all drop-down arrows are removed from the table header row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Show AutoFilter:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilter());