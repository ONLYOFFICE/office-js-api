// This example shows how to find the average (arithmetic mean) for the cells specified by a given condition or criteria.
// How to find an average (arithmetic mean) using condition.
// Use function to get an average of the cells if the condition is met.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var numbers = [67, 87, 98, 45];

for (var i = 0; i < numbers.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(numbers[i]);
}

var oRange = oWorksheet.GetRange("A1:A4");
oWorksheet.GetRange("C1").SetValue(oFunction.AVERAGEIF(oRange, ">45"));