// Get the 1-based priority of a sort field in a spreadsheet.

// How to check the position of a sort field within the sort order in a spreadsheet.

// Get the 1-based priority of a sort field in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sortFields = table.GetSort().GetSortFields();
sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
let field2 = sortFields.Add(worksheet.GetRange("B1:B3"), "xlSortOnValues", "xlDescending");

worksheet.GetRange("D1").SetValue("Field 2 priority:");
worksheet.GetRange("E1").SetValue(field2.GetPriority());