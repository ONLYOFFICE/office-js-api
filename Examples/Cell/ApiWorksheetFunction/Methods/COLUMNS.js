// This example shows how to return the number of columns in the cell range.

// How to find a number of columns from a range.

// Use function to count range column.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let column1 = [13, 14, 15];
let column2 = [23, 24, 25];

for (let i = 0; i < column1.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (let j = 0; j < column2.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}

let range = worksheet.GetRange("A1:B3");
worksheet.GetRange("B4").SetValue(func.COLUMNS(range));