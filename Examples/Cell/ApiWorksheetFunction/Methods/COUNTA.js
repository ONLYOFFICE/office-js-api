// This example shows how to count a number of cells in a range that are not empty.
// How to find a number of non-empty cells.
// Use function to get non-empty cells count.
var oWorksheet = Api.GetActiveSheet();
var numbersArr = [45, 6, 8];
var stringsArr = ["Apples", "Oranges", "Bananas"]

// Place the numbers in cells
for (var i = 0; i < numbersArr.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

// Place the strings in cells
for (var n = 0; n < stringsArr.length; n++) {
    oWorksheet.GetRange("B" + (n + 1)).SetValue(stringsArr[n]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.COUNTA(oWorksheet.GetRange("A1:C3"));
oWorksheet.GetRange("D3").SetValue(ans);