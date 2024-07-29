// This example sets a string value representing the object name.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("name", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("name");
oDefName.SetName("new_name");
var oNewDefName = Api.GetDefName("new_name");
oWorksheet.GetRange("A3").SetValue("The new name of the range: " + oNewDefName.GetName());