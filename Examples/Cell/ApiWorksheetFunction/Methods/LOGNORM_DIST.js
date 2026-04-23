// Calculate the lognormal probability distribution for a given value in a spreadsheet.

// How do I find the cumulative or probability density for a lognormal distributed variable in a spreadsheet?

// Determine the probability distribution of a lognormally distributed dataset in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let numbersArr = [4, 3.5, 1.2];

//set values in cells
for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
let xValue = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let standardDeviation = worksheet.GetRange("A3");
let cummulative = true;

//invoke LOGNORM.DIST method
let func = Api.WorksheetFunction;
let ans = func.LOGNORM_DIST(xValue, mean, standardDeviation, cummulative);

//print answer
worksheet.GetRange("C1").SetValue(ans);