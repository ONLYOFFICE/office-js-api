// Set the sort-on type of a sort field in a spreadsheet.

// How to change a sort field to sort by cell color instead of values.

// Set the sort-on type for a sort field in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
field.SetSortOn("xlSortOnCellColor");

worksheet.GetRange("C1").SetValue("Sort on after change:");
worksheet.GetRange("D1").SetValue(field.GetSortOn());