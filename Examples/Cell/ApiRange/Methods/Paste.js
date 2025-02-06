// This example pastes the Range object to the specified range.
// How to get a range and paste it into another one.
// Create a range add it to an abother one.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B4").SetValue("1");
oWorksheet.GetRange("C4").SetValue("2");
oWorksheet.GetRange("D4").SetValue("3");
var oRangeFrom = oWorksheet.GetRange("B4:D4");
var oRange = oWorksheet.GetRange("A1:C1");
oRange.Paste(oRangeFrom);