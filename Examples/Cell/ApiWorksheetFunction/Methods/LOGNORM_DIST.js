const oWorksheet = Api.GetActiveSheet();

//configure function parameters
var numbersArr = [4, 3.5, 1.2];

//set values in cells
for (var i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
var xValue = oWorksheet.GetRange("A1");
var mean = oWorksheet.GetRange("A2");
var standardDeviation = oWorksheet.GetRange("A3");
var cummulative = true;

//invoke LOGNORM.DIST method
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.LOGNORM_DIST(xValue, mean, standardDeviation, cummulative);

//print answer
oWorksheet.GetRange("C1").SetValue(ans);
