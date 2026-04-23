// Read which column range a sort criterion is targeting in a spreadsheet.

// How do I find out which cells a sort field is based on in a spreadsheet?

// Confirm the exact data range driving a particular sort rule in a spreadsheet.

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