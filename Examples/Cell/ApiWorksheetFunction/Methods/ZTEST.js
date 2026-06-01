// Perform a z-test and return the one-tailed probability value in a spreadsheet.

// How do I run a one-tailed z-test for statistical hypothesis testing in a spreadsheet?

// Calculate the statistical significance score for a one-tailed z-test in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let argumentsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// Place the numbers in cells
for (let i = 0; i < argumentsArr.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(argumentsArr[i]);
}

// Get values from the range
let data = worksheet.GetRange("A1:A16");

// Calculate the TRIMMEAN of the range A1:A16
let func = Api.WorksheetFunction;
let result = func.ZTEST(data, 0.4);
worksheet.GetRange("B1").SetValue(result);