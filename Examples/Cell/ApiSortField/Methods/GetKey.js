// Get the sort key range of a sort field in a spreadsheet.

// How to retrieve the column range that a sort field is applied to in a spreadsheet.

// Get the column range used as the sort key in a spreadsheet.

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
let field = sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
let key = field.GetKey();

worksheet.GetRange("D1").SetValue("Sort key address:");
worksheet.GetRange("E1").SetValue(key ? key.GetAddress() : "none");