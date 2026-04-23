// Calculate the cumulative probability for a lognormal distribution in a spreadsheet.

// How do I find the probability that a value falls below a given threshold in a lognormal distribution in a spreadsheet?

// Determine the cumulative probability of a lognormal dataset in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let numbersArr = [4, 7, 40];

//set values in cells
for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
let xValue = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let standardDeviation = worksheet.GetRange("A3");

//invoke LOGNORMDIST method
let func = Api.WorksheetFunction;
let ans = func.LOGNORMDIST(xValue, mean, standardDeviation);

//print answer
worksheet.GetRange("C1").SetValue(ans);