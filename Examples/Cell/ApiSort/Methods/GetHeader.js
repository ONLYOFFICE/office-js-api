// This example gets the header setting of a table sort object.

// How to check whether the sort treats the first row as a header.

// Check the header setting of the sort object.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Header setting:");
worksheet.GetRange("D1").SetValue(sort.GetHeader());
