// This example shows how to return the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with the specified parameters.
// How to get the lognormal cumulative distribution function of x.
// Use a function to return the lognormal cumulative distribution function.
const oWorksheet = Api.GetActiveSheet();

//configure function parameters
var numbersArr = [0.5, 4, 7];

//set values in cells
for (var i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
var probability = oWorksheet.GetRange("A1");
var mean = oWorksheet.GetRange("A2");
var standardDeviation = oWorksheet.GetRange("A3");

//invoke LOGINV method
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.LOGINV(probability, mean, standardDeviation);

//print answer
oWorksheet.GetRange("C1").SetValue(ans);
