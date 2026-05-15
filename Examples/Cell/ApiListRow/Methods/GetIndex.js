// Find the position number of a row within a table in a spreadsheet.

// How do I check which row number a particular row occupies inside a table in a spreadsheet?

// Read the row's index to know its place in the data body, counted from the first data row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let row = table.GetListRows()[1];

worksheet.GetRange("D1").SetValue("Row index:");
worksheet.GetRange("E1").SetValue(row.GetIndex());