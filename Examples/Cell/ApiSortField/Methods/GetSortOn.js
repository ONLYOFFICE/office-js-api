// Get the sort-on type of a sort field in a spreadsheet.

// How to check whether a sort field sorts by values, color, or icon in a spreadsheet.

// Check whether the field sorts by values, color, or icon in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");

worksheet.GetRange("C1").SetValue("Sort on:");
worksheet.GetRange("D1").SetValue(field.GetSortOn());