// This example shows how to return the skewness of a distribution: a characterization of the degree of asymmetry of a distribution around its mean.
// How to calaculate the skewness of a distribution.
// Use a function to get a characterization of the degree of asymmetry of a distribution around its mean.
const oWorksheet = Api.GetActiveSheet();

var valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.SKEW(1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12);

oWorksheet.GetRange("C1").SetValue(ans);
