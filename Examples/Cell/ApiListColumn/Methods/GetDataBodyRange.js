// This example gets the data body range of a table column, excluding the header and totals rows.

// How to retrieve only the data cells of a specific column.

// Get the data body range of a column, excluding the header and totals rows.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[0];
let dataRange = column.GetDataBodyRange();

worksheet.GetRange("D1").SetValue("Data body range:");
worksheet.GetRange("E1").SetValue(dataRange.GetAddress());
