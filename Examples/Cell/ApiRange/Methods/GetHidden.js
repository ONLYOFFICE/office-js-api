// This example shows how to get the value hiding property.
// How to find out hidden property from a range.
// Get a range, get its cell hiding property and show it in the worksheet.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRows("1:3");
oRange.SetHidden(true);
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
var bHidden = oRange.GetHidden();
oWorksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + bHidden);