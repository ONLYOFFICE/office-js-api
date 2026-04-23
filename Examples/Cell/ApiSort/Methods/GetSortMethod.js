// Read the sorting method used for Chinese characters in a table in a spreadsheet.

// How do I find out whether the sort orders Chinese text by pronunciation or stroke count in a spreadsheet?

// Determine which algorithm governs the ordering of Chinese-language cell values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Sort method:");
worksheet.GetRange("D1").SetValue(sort.GetSortMethod());