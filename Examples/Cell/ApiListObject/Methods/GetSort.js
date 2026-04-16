// Get the sort object associated with a formatted table.

// How to retrieve the sort settings of a table in a spreadsheet.

// The returned sort object lets you define sort fields and apply them with Sort.Apply() in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
worksheet.GetRange("D1").SetValue("Sort orientation:");
worksheet.GetRange("E1").SetValue(sort.GetOrientation());