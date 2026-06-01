// Choose how Chinese characters are ordered when sorting a table in a spreadsheet.

// How do I sort Chinese text by pronunciation rather than stroke order in a spreadsheet?

// Switch the ordering rule for Chinese entries between PinYin and stroke-count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
sort.SetSortMethod("xlPinYin");

worksheet.GetRange("C1").SetValue("Sort method:");
worksheet.GetRange("D1").SetValue(sort.GetSortMethod());