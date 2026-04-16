// Hide or shows the AutoFilter dropdown buttons in a formatted table.

// How to toggle the AutoFilter dropdown arrows on a table in a spreadsheet.

// Hiding drop-down arrows prevents interactive filter changes while keeping filter criteria active in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowAutoFilterDropDown(false);

worksheet.GetRange("D1").SetValue("Show dropdown:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilterDropDown());