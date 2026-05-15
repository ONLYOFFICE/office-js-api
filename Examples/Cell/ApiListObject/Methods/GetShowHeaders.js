// Read whether the header row is visible at the top of a table in a spreadsheet.

// How do I check if a table is displaying its column headers in a spreadsheet?

// Confirm column labels are present before referencing them to label output or build a report in a spreadsheet.

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