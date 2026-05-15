// Average only the cells that meet a single condition in a spreadsheet.

// Calculate the mean of values that satisfy a given criterion in a spreadsheet.

// Filter a range by one rule and compute the arithmetic mean of matching entries in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let numbers = [67, 87, 98, 45];

for (let i = 0; i < numbers.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(numbers[i]);
}

let range = worksheet.GetRange("A1:A4");
worksheet.GetRange("C1").SetValue(func.AVERAGEIF(range, ">45"));
