// Retrieve all columns belonging to a table in a spreadsheet.

// How do I get each column of a table as a separate object in a spreadsheet?

// Count or iterate the columns of a table to inspect their names and settings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let columns = table.GetListColumns();
worksheet.GetRange("D1").SetValue("Number of columns:");
worksheet.GetRange("E1").SetValue(columns.length);
worksheet.GetRange("D2").SetValue("First column name:");
worksheet.GetRange("E2").SetValue(columns[0].GetName());