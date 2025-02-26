// This example shows how to calculate standard deviation based on the entire population, including logical values and text. Text and the false logical value have the value 0; the true logical value has the value 1.

// How to calculate standard deviation based on the entire population considering logical and text data types.

// Use a function to get the standard deviation.

const oWorksheet = Api.GetActiveSheet();

var valueArr = [1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12];

// Place the numbers in cells

for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.STDEVPA(1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12); //includes logical values

oWorksheet.GetRange("C1").SetValue(ans);
