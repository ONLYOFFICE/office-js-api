// Get the AutoFilter object of a formatted table.

// How to retrieve the auto filter object associated with a table in a spreadsheet.

// Return null if the table currently has no AutoFilter; use SetShowAutoFilter(true) to add one in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let autoFilter = table.GetAutoFilter();
worksheet.GetRange("D1").SetValue("AutoFilter present:");
worksheet.GetRange("E1").SetValue(autoFilter !== null);