// Read the descriptive note stored on a table in a spreadsheet.

// How do I retrieve the summary text attached to a table in a spreadsheet?

// Verify what note a table carries to understand its documented purpose in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetComment("Sales data table");

worksheet.GetRange("D1").SetValue("Comment:");
worksheet.GetRange("E1").SetValue(table.GetComment());