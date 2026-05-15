// Count the rows in a selected range in a spreadsheet.

// How do I find out how many rows are in a cell range in a spreadsheet?

// Get the total number of rows within a specific area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let column1 = [13, 14, 15];
let column2 = [23, 24, 25];

for (let i = 0; i < column1.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (let j = 0; j < column2.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}

let range = worksheet.GetRange("A1:B3");
worksheet.GetRange("C3").SetValue(func.ROWS(range));