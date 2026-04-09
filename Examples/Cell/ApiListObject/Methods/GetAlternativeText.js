// This example gets the alternative text of a formatted table.

// How to read the accessibility description of a table.

// Alternative text helps screen readers identify the table's purpose for accessibility.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");

let table = worksheet.AddListObject("xlSrcRange", "A1:A3");
table.SetAlternativeText("List of products");

worksheet.GetRange("C1").SetValue("Alternative text:");
worksheet.GetRange("D1").SetValue(table.GetAlternativeText());
