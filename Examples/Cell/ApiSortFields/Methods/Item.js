// This example gets a sort field by its 1-based index from a sort fields collection.

// How to access a specific sort field in a formatted table.

// Get a sort field by its 1-based index.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");

let field = sortFields.Item(1);

worksheet.GetRange("D1").SetValue("Sort order:");
worksheet.GetRange("E1").SetValue(field.GetOrder());
