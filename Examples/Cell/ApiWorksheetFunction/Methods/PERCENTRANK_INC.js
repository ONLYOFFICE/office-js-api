// Get the rank of a value as a percentage within a range, including edges in a spreadsheet.

// How do I rank a number as a percentage relative to other values in a spreadsheet?

// Find where a value stands percentually between the smallest and largest numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let column1 = [1, 0, 7, 10];
let column2 = [3, 2, 5, 8];
let column3 = [5, 4, 3, 6];
let column4 = [7, 6, 5, 4];

for (let i = 0; i < column1.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (let j = 0; j < column2.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}
for (let n = 0; n < column3.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(column3[n]);
}
for (let m = 0; m < column4.length; m++) {
    worksheet.GetRange("D" + (m + 1)).SetValue(column4[m]);
}

let range = worksheet.GetRange("A1:D4");
worksheet.GetRange("D5").SetValue(func.PERCENTRANK_INC(range, 2, 4));