// This example enables case-sensitive sorting for a formatted table.

// How to make a table sort case-sensitive.

// Enable case-sensitive sorting — adding a sort field applies the sort immediately.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("apple");
worksheet.GetRange("A3").SetValue("cherry");
worksheet.GetRange("A4").SetValue("Apple");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
sort.SetMatchCase(true);
sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");

worksheet.GetRange("C1").SetValue("First product after case-sensitive sort:");
worksheet.GetRange("D1").SetValue(worksheet.GetRange("A2").GetValue());
