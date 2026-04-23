// Retrieve all data rows belonging to a table in a spreadsheet.

// How do I get each data row of a table as a separate object in a spreadsheet?

// Count the entries in a table without including its header or totals row in a spreadsheet.

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