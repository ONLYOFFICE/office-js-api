// This example shows how to get an array of ApiName objects.

// How to get all def names.

// Get all def names as an array.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("A2").SetValue("A");
worksheet.GetRange("B2").SetValue("B");
worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.AddDefName("letters", "Sheet1!$A$2:$B$2");
let defNames = worksheet.GetDefNames();
worksheet.GetRange("A4").SetValue("DefNames: " + defNames[0].GetName() + ", " + defNames[1].GetName());
