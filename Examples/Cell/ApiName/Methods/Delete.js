// This example deletes the DefName object.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("numbers");
oDefName.Delete();
oWorksheet.GetRange("A3").SetValue("The name 'numbers' of the range A1:B1 was deleted.");