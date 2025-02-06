// This example shows how to calculate standard deviation based on the entire population given as arguments (ignores logical values and text).
// How to calculate standard deviation based on the entire population.
// Use a function to get the standard deviation.
const oWorksheet = Api.GetActiveSheet();

var valueArr = [1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.STDEVP(1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12); 

oWorksheet.GetRange("C1").SetValue(ans);
