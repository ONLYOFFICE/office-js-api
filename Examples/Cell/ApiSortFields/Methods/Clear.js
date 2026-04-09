// This example removes all sort fields from a sort fields collection.

// How to reset all sort fields of a formatted table.

// Remove all sort fields from the collection.

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
sortFields.Add(worksheet.GetRange("B1:B3"), "xlSortOnValues", "xlDescending");

worksheet.GetRange("D1").SetValue("Before clear:");
worksheet.GetRange("E1").SetValue(sortFields.GetCount());

sortFields.Clear();

worksheet.GetRange("D2").SetValue("After clear:");
worksheet.GetRange("E2").SetValue(sortFields.GetCount());
