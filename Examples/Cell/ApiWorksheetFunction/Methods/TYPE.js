// This example shows how to return an integer representing the data type of a value: number = 1; text = 2; logical value = 4; error value = 16; array = 64; compound data = 128.

// How to get an integer representing the data type of a value.

// Use a function to return the data type of a value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TYPE(255));
oWorksheet.GetRange("A2").SetValue(oFunction.TYPE(true));
oWorksheet.GetRange("A3").SetValue(oFunction.TYPE("Online Office"));