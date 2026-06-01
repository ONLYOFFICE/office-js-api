// Read what a sort criterion is based on — cell values, fill color, or icon — in a spreadsheet.

// How do I find out whether a sort field reorders rows by content or by formatting in a spreadsheet?

// Distinguish between value-based and color-based sorting for a given sort rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");

worksheet.GetRange("C1").SetValue("Sort on:");
worksheet.GetRange("D1").SetValue(field.GetSortOn());