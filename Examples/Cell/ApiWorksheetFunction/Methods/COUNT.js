// This example shows how to count a number of cells in a range that contains numbers ignoring empty cells or those.
// How to find a number of cells.
// Use function to get cells count.
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
var ans = oFunction.COUNT(oWorksheet.GetRange("A1:C3"));
oWorksheet.GetRange("D3").SetValue(ans);