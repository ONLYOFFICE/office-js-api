// This example sets reference style.
// How to set a style of a reference.
// Set reference style using ID.
var oWorksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
oWorksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());