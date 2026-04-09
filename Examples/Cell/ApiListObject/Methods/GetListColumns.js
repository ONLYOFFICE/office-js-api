// This example gets all columns of a formatted table.

// How to retrieve the list of ApiListColumn objects from a table.

// Each ApiListColumn in the returned array corresponds to one column, ordered left to right.

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
