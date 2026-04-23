// Retrieve a named range from the active sheet by its name in a spreadsheet.

// How do I look up a named range on a worksheet in a spreadsheet?

// Find a specific named range and read its title in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = worksheet.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());