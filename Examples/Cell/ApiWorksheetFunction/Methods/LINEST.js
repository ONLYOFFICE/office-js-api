

const oWorksheet = Api.GetActiveSheet();

//configure function parameters
var yValues = [1.5, 2, 3];
var xValues = [2, 3.1, 3.5];
var constant = true;
var stats = true;

//set values in cells
for (var i = 0; i < yValues.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(yValues[i]);
}
for (var n = 0; n < xValues.length; n++) {
  oWorksheet.GetRange("B" + (n + 1)).SetValue(xValues[n]);
}

//get x and y ranges
var yRange = oWorksheet.GetRange("A1:A3");
var xRange = oWorksheet.GetRange("B1:B3");
var oFunction = Api.GetWorksheetFunction();

//invoke LINEST method
var ans = oFunction.LINEST(yRange, xRange, constant, stats);
console.log(ans)

//print answer 
 oWorksheet.GetRange("D1").SetValue(ans);

