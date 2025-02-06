// This example shows how to calculate standard deviation based on the entire population given as arguments (ignores logical values and text).
// How to calculate standard deviation based on the entire population.
// Use a function to get the standard deviation.
const oWorksheet = Api.GetActiveSheet();

var valueArr = [
  3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14, 3, 5, 17, 18,
];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.STDEV_P(3,2,3,4,5,6,7,8,9,10,11,12,0,1,13,14,3,5,17,18); 

oWorksheet.GetRange("C1").SetValue(ans);
