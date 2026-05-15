// Read whether the filter drop-down arrows are visible in a table in a spreadsheet.

// How do I find out if the filter drop-down buttons are showing on a table in a spreadsheet?

// Verify that users can access the column filter menus before presenting the table in a spreadsheet.

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