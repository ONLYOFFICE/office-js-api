// Read whether case-sensitive sorting is turned on for a table in a spreadsheet.

// How do I find out if uppercase and lowercase letters are treated differently when sorting in a spreadsheet?

// Inspect whether the sort distinguishes between upper and lower case text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Match case:");
worksheet.GetRange("D1").SetValue(sort.GetMatchCase());