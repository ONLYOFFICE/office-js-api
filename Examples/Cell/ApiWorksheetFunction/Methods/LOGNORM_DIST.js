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
let func = Api.GetWorksheetFunction();
let ans = func.LOGNORM_DIST(xValue, mean, standardDeviation, cummulative);

//print answer
worksheet.GetRange("C1").SetValue(ans);
