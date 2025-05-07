// This example shows how to return the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with the specified parameters.

// How to get the lognormal cumulative distribution function of x.

// Use a function to return the lognormal cumulative distribution function.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let numbersArr = [0.5, 4, 7];

//set values in cells
for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
let probability = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let standardDeviation = worksheet.GetRange("A3");

//invoke LOGINV method
let func = Api.GetWorksheetFunction();
let ans = func.LOGINV(probability, mean, standardDeviation);

//print answer
worksheet.GetRange("C1").SetValue(ans);
