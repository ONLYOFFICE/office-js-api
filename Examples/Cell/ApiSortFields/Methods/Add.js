// Add a sort field to a table sort fields collection in a spreadsheet.

// How to configure a sort column for a formatted table.

// Add a sort field to the collection — the sort is applied immediately in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("A4").SetValue("Bananas");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");

worksheet.GetRange("C1").SetValue("Fields count:");
worksheet.GetRange("D1").SetValue(sortFields.GetCount());
worksheet.GetRange("C2").SetValue("First product after sort:");
worksheet.GetRange("D2").SetValue(worksheet.GetRange("A2").GetValue());