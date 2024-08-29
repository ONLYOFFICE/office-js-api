
const oWorksheet = Api.GetActiveSheet();

//configure function parameters
var numbersArr = [4, 7, 40];

//set values in cells
for (var i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
var xValue = oWorksheet.GetRange("A1");
var mean = oWorksheet.GetRange("A2");
var standardDeviation = oWorksheet.GetRange("A3");

//invoke LOGNORMDIST method
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.LOGNORMDIST(xValue, mean, standardDeviation);

//print answer
oWorksheet.GetRange("C1").SetValue(ans);
