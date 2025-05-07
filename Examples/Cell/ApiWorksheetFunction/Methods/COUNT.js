// This example shows how to count a number of cells in a range that contains numbers ignoring empty cells or those.

// How to find a number of cells.

// Use function to get cells count.

let worksheet = Api.GetActiveSheet();
let numbersArr = [45, 6, 8];
let stringsArr = ["Apples", "ranges", "Bananas"]

// Place the numbers in cells
for (let i = 0; i < numbersArr.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

// Place the strings in cells
for (let n = 0; n < stringsArr.length; n++) {
    worksheet.GetRange("B" + (n + 1)).SetValue(stringsArr[n]);
}

let func = Api.GetWorksheetFunction();
let ans = func.COUNT(worksheet.GetRange("A1:C3"));
worksheet.GetRange("D3").SetValue(ans);