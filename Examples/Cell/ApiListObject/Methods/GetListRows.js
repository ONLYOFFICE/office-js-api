// Get all data rows of a formatted table.

// How to retrieve the list of list row objects from a table in a spreadsheet.

// The returned array contains only data rows; the header row and totals row are not included in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let rows = table.GetListRows();
worksheet.GetRange("D1").SetValue("Number of data rows:");
worksheet.GetRange("E1").SetValue(rows.length);