// This example shows how to get the ApiRange object by its name.
// How to get a range knowig its defname.
// Find a range by its name and change its properties.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("numbers");
var oRange = oDefName.GetRefersToRange();
oRange.SetBold(true);