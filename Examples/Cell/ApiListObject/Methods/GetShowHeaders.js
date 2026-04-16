// Check whether the header row is shown for a formatted table.

// How to determine if the header row is visible in a table in a spreadsheet.

// When false, column label cells are hidden and the first data row moves up to the header position.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Show headers:");
worksheet.GetRange("E1").SetValue(table.GetShowHeaders());