// Locate the cells that make up the header row of a table in a spreadsheet.

// How do I get the range occupied by a table's column headings in a spreadsheet?

// Identify which cells hold the column labels so you can read or style them separately in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let headerRange = table.GetHeaderRowRange();
worksheet.GetRange("D1").SetValue("Header range:");
worksheet.GetRange("E1").SetValue(headerRange.GetAddress());