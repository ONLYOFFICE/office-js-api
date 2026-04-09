// This example removes a sort field from the sort fields collection.

// How to delete an individual sort field from a table's sort configuration.

// Remove a sort field from the collection.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sortFields = table.GetSort().GetSortFields();
sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
let field2 = sortFields.Add(worksheet.GetRange("B1:B3"), "xlSortOnValues", "xlDescending");

field2.Delete();

worksheet.GetRange("D1").SetValue("Fields count after delete:");
worksheet.GetRange("E1").SetValue(sortFields.GetCount());
