
let worksheet = Api.GetActiveSheet();
let argumentsArr = [1, 2, 3, 4];

// Place the numbers in cells
for (let i = 0; i < argumentsArr.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(argumentsArr[i]);
}

// Get values from the range
let data = worksheet.GetRange("A1:A4");

// Calculate the TRIMMEAN of the range A1:A6
let func = Api.GetWorksheetFunction();
let result = func.TRIMMEAN(data, 0.6);
worksheet.GetRange("B1").SetValue(result);
