// Show or hide the column header row of a table in a spreadsheet.

// How do I control whether a table displays its header row in a spreadsheet?

// Remove the header row from view to produce a compact table layout in a spreadsheet.

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