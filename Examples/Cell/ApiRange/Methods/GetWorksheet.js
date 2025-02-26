// This example shows how to get the Worksheet object that represents the worksheet containing the specified range.

// How to get a worksheet where a range is contained in.

// Get a worksheet from its range and show its name.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C1");
oRange.SetValue("1");
var oSheet = oRange.GetWorksheet();
oWorksheet.GetRange("A3").SetValue("Worksheet name: " + oSheet.GetName());