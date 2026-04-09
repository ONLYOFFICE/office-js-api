// This example sets the sort method of a table sort object.

// How to specify whether Chinese characters are sorted by PinYin or stroke order.

// Set the sort method for Chinese characters.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
sort.SetSortMethod("xlPinYin");

worksheet.GetRange("C1").SetValue("Sort method:");
worksheet.GetRange("D1").SetValue(sort.GetSortMethod());
