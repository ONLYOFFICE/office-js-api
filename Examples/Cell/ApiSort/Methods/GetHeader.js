// Get the header setting of a table sort object in a spreadsheet.

// How to check whether the sort treats the first row as a header in a spreadsheet.

// Check the header setting of the sort object in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Header setting:");
worksheet.GetRange("D1").SetValue(sort.GetHeader());