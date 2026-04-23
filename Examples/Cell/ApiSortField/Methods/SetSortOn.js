// Switch a sort column from ordering by value to ordering by cell color in a spreadsheet.

// How do I make a column sort by background color instead of text in a spreadsheet?

// Change what a sort column is based on so rows group by color rather than content in a spreadsheet.

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