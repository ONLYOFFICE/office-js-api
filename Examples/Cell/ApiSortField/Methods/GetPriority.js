// Find the rank of a sort criterion among all active sorting rules in a spreadsheet.

// How do I check which position a particular sort field occupies in the sorting order in a spreadsheet?

// Determine whether a sort field is applied first, second, or later when ordering table rows in a spreadsheet.

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