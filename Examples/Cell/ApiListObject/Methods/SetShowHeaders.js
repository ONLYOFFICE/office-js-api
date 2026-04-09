// This example toggles the header row visibility of a formatted table.

// How to show or hide the header row in a table.

// When set to false, column label cells are hidden and the first data row moves to the header position.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowHeaders(false);

worksheet.GetRange("D1").SetValue("Show headers:");
worksheet.GetRange("E1").SetValue(table.GetShowHeaders());
