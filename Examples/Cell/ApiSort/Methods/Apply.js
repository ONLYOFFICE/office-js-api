// Sort a formatted table by the first column in ascending order.

// How to apply sort settings to a formatted table.

// Apply the configured sort settings to the table in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("B4").SetValue(80);
let table = worksheet.AddListObject("xlSrcRange", "A1:B4");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add(worksheet.GetRange("A2:A4"), "xlSortOnValues", "xlAscending");
sort.Apply();

worksheet.GetRange("D1").SetValue("First product after sort:");
worksheet.GetRange("E1").SetValue(worksheet.GetRange("A2").GetValue());