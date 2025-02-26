// This example shows how to combine multiple text strings into one text string.

// How to add multiple text strings into one text string.

// Use function to create one text string from multiple ones.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CONCATENATE("John", " ", "Adams"));