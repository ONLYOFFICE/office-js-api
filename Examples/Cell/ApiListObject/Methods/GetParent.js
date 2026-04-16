// Get the parent worksheet of a formatted table.

// How to retrieve the worksheet that contains a table.

// Navigating to the parent worksheet lets you access other ranges and objects on the same sheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let parent = table.GetParent();
worksheet.GetRange("D1").SetValue("Parent sheet name:");
worksheet.GetRange("E1").SetValue(parent.GetName());