// This example sets the bold property to the text characters in the current cell or cell range.
// How to change font style properties of a range making it bold.
// Make characters of range bold.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Bold text");
oWorksheet.GetRange("A2").SetBold(true);
oWorksheet.GetRange("A3").SetValue("Normal text");