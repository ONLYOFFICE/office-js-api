// This example gets the full range of a formatted table.

// How to retrieve the complete range covered by a table.

// The full range includes the header row, all data rows, and the totals row if it is visible.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let range = table.GetRange();
worksheet.GetRange("D1").SetValue("Table range address:");
worksheet.GetRange("E1").SetValue(range.GetAddress());
