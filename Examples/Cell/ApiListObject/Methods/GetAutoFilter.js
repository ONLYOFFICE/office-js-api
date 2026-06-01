// Access the auto filter attached to a table in a spreadsheet.

// How do I check whether a table has an auto filter in a spreadsheet?

// Confirm that a table's filter control is present before applying filter settings in a spreadsheet.

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