// Get the data body range of a formatted table.

// How to retrieve the data area of a table excluding the header and totals rows in a spreadsheet.

// The data body range covers only data rows, excluding the header row and totals row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let dataRange = table.GetDataBodyRange();
worksheet.GetRange("D1").SetValue("Data body range:");
worksheet.GetRange("E1").SetValue(dataRange.GetAddress());