// This example gets the sort fields collection from a table's sort object.

// How to access the ApiSortFields collection of a formatted table.

// The SortFields collection holds all sort criteria that will be applied when Sort.Apply() is called.

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

worksheet.GetRange("D1").SetValue("Sort fields count:");
worksheet.GetRange("E1").SetValue(sortFields.GetCount());
