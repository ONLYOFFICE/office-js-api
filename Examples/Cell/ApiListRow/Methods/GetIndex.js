// Get the 1-based index of a data row in a formatted table.

// How to find the position of a row within the data body of a table in a spreadsheet.

// Get the 1-based index of a row within the table in a spreadsheet.

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