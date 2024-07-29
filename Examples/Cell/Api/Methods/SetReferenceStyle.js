// This example sets reference style.
var oWorksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
oWorksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());