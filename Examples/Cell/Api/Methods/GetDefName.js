// This example shows how to get the ApiName object by the range name.

// How to work with named ranges in a spreadsheet using the API.

// Get name of an object using a range name. 

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("numbers");
oWorksheet.GetRange("A3").SetValue("DefName: " + oDefName.GetName());