// This example shows how to get an object that represents the selected range.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetSelection().SetValue("selected");