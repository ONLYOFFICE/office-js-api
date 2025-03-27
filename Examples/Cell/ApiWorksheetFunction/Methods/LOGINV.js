
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
