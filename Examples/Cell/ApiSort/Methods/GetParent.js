// This example gets the parent list object of a sort object.

// How to navigate from a sort object back to its parent formatted table.

// Get the parent formatted table from a sort object.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let parentTable = sort.GetParent();

worksheet.GetRange("C1").SetValue("Parent table name:");
worksheet.GetRange("D1").SetValue(parentTable.GetName());
