// Turn on case-sensitive sorting for a formatted table in a spreadsheet.

// How do I make the sort treat uppercase and lowercase letters as different values in a spreadsheet?

// Configure the sort to distinguish between upper and lower case text before ordering rows in a spreadsheet.

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