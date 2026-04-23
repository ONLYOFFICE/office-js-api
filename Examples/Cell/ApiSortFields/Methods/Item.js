// Pick a specific sort column from a table's sort list by its position in a spreadsheet.

// How do I access one particular sort column by its position in a spreadsheet?

// Look up a sort column at a given index to inspect or change its order setting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");

let field = sortFields.Item(1);

worksheet.GetRange("D1").SetValue("Sort order:");
worksheet.GetRange("E1").SetValue(field.GetOrder());