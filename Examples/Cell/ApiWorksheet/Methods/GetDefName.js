// This example shows how to get the ApiName object by the worksheet name.

// How to get def name object.

// Get ApiName object using its name.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = oWorksheet.GetDefName("numbers");
oWorksheet.GetRange("A3").SetValue("DefName: " + oDefName.GetName());