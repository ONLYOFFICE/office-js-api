// Get the number of sort fields in a sort fields collection in a spreadsheet.

// How to count the sort fields configured for a formatted table.

// Get the number of sort fields in the collection in a spreadsheet.

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

worksheet.GetRange("D1").SetValue("Sort fields count:");
worksheet.GetRange("E1").SetValue(sortFields.GetCount());