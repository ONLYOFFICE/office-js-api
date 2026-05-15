// Look up the defined name assigned to a cell range in a spreadsheet.

// How do I find out what name has been given to a range in a spreadsheet?

// Print the assigned name of a range into another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let range = worksheet.GetRange("A1:B1");
let defName = range.GetDefName();
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());