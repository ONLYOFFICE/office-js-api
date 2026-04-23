// Wipe all sort columns from a formatted table so no sorting rules remain in a spreadsheet.

// How do I remove every sort column from a table at once in a spreadsheet?

// Reset the table's sort setup by discarding all previously defined sort columns in a spreadsheet.

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
sortFields.Add(worksheet.GetRange("B1:B3"), "xlSortOnValues", "xlDescending");

worksheet.GetRange("D1").SetValue("Before clear:");
worksheet.GetRange("E1").SetValue(sortFields.GetCount());

sortFields.Clear();

worksheet.GetRange("D2").SetValue("After clear:");
worksheet.GetRange("E2").SetValue(sortFields.GetCount());