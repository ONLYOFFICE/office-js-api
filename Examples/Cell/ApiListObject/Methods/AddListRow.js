// Append a new data row to a formatted table in a spreadsheet.

// How do I add another row of data to an existing table in a spreadsheet?

// Extend the table downward to accommodate incoming records while keeping all formatting intact in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
let newRow = table.AddListRow();

worksheet.GetRange("D1").SetValue("Row count after add:");
worksheet.GetRange("E1").SetValue(table.GetListRows().length);