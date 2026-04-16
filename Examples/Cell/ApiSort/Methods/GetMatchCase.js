// Check whether a table sort is case-sensitive in a spreadsheet.

// How to determine if case sensitivity is enabled for a table sort in a spreadsheet.

// Check whether case-sensitive sorting is enabled in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Match case:");
worksheet.GetRange("D1").SetValue(sort.GetMatchCase());