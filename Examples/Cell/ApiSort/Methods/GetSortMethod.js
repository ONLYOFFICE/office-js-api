// Get the sort method of a table sort object in a spreadsheet.

// How to check whether sorting uses PinYin or stroke order for Chinese characters in a spreadsheet.

// Get the sort method used for Chinese characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Sort method:");
worksheet.GetRange("D1").SetValue(sort.GetSortMethod());