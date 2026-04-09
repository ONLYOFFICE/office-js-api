// This example sets the AutoFilter visibility for a formatted table.

// How to show or hide the AutoFilter on a table.

// Setting to false removes the AutoFilter and all drop-down arrows from the table header row.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowAutoFilter(false);

worksheet.GetRange("D1").SetValue("Show AutoFilter:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilter());
