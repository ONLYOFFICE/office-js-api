// This example changes the sort order of a sort field.

// How to change the sort direction of a sort field to descending.

// Change the sort direction of a sort field and apply the sort.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("A4").SetValue("Bananas");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");

field.SetOrder("xlDescending");
sort.Apply();

worksheet.GetRange("C1").SetValue("First product after descending sort:");
worksheet.GetRange("D1").SetValue(worksheet.GetRange("A2").GetValue());
