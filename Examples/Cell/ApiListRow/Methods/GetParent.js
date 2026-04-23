// Retrieve the table that a given row belongs to in a spreadsheet.

// How do I navigate from a table row back to its parent table in a spreadsheet?

// Access the owning table from a row reference so you can read or change table-level properties in a spreadsheet.

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