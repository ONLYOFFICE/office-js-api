// Get the parent list object of a table row in a spreadsheet.

// How to navigate from a row back to its parent formatted table.

// Get the parent formatted table from a row.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let row = table.GetListRows()[0];
let parentTable = row.GetParent();

worksheet.GetRange("D1").SetValue("Parent table name:");
worksheet.GetRange("E1").SetValue(parentTable.GetName());