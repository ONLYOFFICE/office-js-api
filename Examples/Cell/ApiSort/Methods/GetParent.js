// Retrieve the formatted table that owns a given sort object in a spreadsheet.

// How do I trace a sort back to the table it belongs to in a spreadsheet?

// Access the parent table from a sort object to read its properties in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let parentTable = sort.GetParent();

worksheet.GetRange("C1").SetValue("Parent table name:");
worksheet.GetRange("D1").SetValue(parentTable.GetName());