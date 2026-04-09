// This example changes the sort key column of an existing sort field.

// How to reassign the sort key range of a sort field.

// Change the sort key column of an existing sort field and apply the sort.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("B4").SetValue(80);
let table = worksheet.AddListObject("xlSrcRange", "A1:B4");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");
field.ModifyKey(worksheet.GetRange("B1"));
sort.Apply();

worksheet.GetRange("D1").SetValue("First product after sort by price:");
worksheet.GetRange("E1").SetValue(worksheet.GetRange("A2").GetValue());
