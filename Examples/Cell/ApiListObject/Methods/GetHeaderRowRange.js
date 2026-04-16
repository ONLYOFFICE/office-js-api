// Get the header row range of a formatted table.

// How to retrieve the range of the table header row in a spreadsheet.

// Return null when ShowHeaders is false, because the header row is not visible in that case in a spreadsheet.

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