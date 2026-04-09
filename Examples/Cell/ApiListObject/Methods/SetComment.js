// This example sets the comment (summary) of a formatted table.

// How to assign a descriptive comment to a table.

// The comment is a descriptive note on the table object, separate from any cell comments.

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
