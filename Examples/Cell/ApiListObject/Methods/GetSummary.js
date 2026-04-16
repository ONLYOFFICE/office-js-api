// Get the summary text of a formatted table.

// How to read the summary description of a table in a spreadsheet.

// Use ApiListObject.GetSummary() to retrieve the table summary text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetSummary("Monthly product sales data");

worksheet.GetRange("D1").SetValue("Summary:");
worksheet.GetRange("E1").SetValue(table.GetSummary());