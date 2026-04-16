// Get the sort order of a sort field in a spreadsheet.

// How to check whether a sort field sorts ascending or descending in a spreadsheet.

// Check the sort direction of a sort field in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlDescending");

worksheet.GetRange("C1").SetValue("Sort order:");
worksheet.GetRange("D1").SetValue(field.GetOrder());