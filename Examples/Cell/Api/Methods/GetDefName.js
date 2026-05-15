// Look up a named range by its label and read its name in a spreadsheet.

// How do I find a named range using its label in a spreadsheet?

// Resolve a range label to its definition and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());