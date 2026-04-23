// Read whether a sort criterion arranges values from smallest to largest or the reverse in a spreadsheet.

// How do I tell if a sort field is set to ascending or descending in a spreadsheet?

// Verify the direction in which a column's values will be ordered after sorting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlDescending");

worksheet.GetRange("C1").SetValue("Sort order:");
worksheet.GetRange("D1").SetValue(field.GetOrder());