// Check whether AutoFilter dropdown buttons are visible in a formatted table.

// How to determine if the AutoFilter dropdown arrows are displayed in a spreadsheet.

// Hiding drop-down arrows prevents interactive filter changes while keeping filter criteria active in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Show dropdown:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilterDropDown());