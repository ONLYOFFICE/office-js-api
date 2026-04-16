// Get the sort orientation of a table sort object in a spreadsheet.

// How to check whether the table is sorted by rows or by columns in a spreadsheet.

// Get the sort direction of the sort object in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Sort orientation:");
worksheet.GetRange("D1").SetValue(sort.GetOrientation());