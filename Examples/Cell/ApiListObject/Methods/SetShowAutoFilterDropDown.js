// Hide the filter drop-down arrows on a table without removing the filter in a spreadsheet.

// How do I show or hide the drop-down arrows in a table header in a spreadsheet?

// Prevent users from changing filter settings while keeping existing criteria intact in a spreadsheet.

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