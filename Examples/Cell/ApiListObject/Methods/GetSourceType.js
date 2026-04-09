// This example gets the source type of a formatted table.

// How to determine the data source type of a table.

// For a range-based table the source type is always "xlSrcRange"; other types require an external data connection.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Source type:");
worksheet.GetRange("E1").SetValue(table.GetSourceType());
