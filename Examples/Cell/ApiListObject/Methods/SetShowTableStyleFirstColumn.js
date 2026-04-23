// Apply special formatting to the first column of a table in a spreadsheet.

// How do I make the first column of a table stand out visually in a spreadsheet?

// Turn on the first-column highlight to give the leftmost column a distinct look based on the table style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTableStyleFirstColumn(true);

worksheet.GetRange("D1").SetValue("First column highlight:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleFirstColumn());