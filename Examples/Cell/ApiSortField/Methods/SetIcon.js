// This example configures a sort field to sort by icon.

// How to set up icon-based sorting for a sort field.

// Configure icon-based sorting for a sort field.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
field.SetIcon(null);

worksheet.GetRange("C1").SetValue("Sort on after SetIcon:");
worksheet.GetRange("D1").SetValue(field.GetSortOn());
