// This example shows how to get the ApiName object of the range.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let range = worksheet.GetRange("A1:B1");
let defName = range.GetDefName();
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());