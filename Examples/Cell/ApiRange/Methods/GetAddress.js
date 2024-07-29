// This example shows how to get the range address.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var sAddress = oWorksheet.GetRange("A1").GetAddress(true, true, "xlA1", false);
oWorksheet.GetRange("A3").SetValue("Address: ");
oWorksheet.GetRange("B3").SetValue(sAddress);