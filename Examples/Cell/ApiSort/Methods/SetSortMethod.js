// Choose how Chinese characters are ordered when sorting a table in a spreadsheet.

// How do I store the stroke-count sort method for Chinese text in the sort settings of a table?

// Set the sort method of a table to stroke count and display the stored value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
sort.SetSortMethod("xlStroke");

worksheet.GetRange("C1").SetValue("Sort method:");
worksheet.GetRange("D1").SetValue(sort.GetSortMethod());