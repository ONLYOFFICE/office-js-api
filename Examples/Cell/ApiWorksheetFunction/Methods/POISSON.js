
const worksheet = Api.GetActiveSheet();

//method params
let x = 9;
let mean = 12;
let cumulative = false;

let func = Api.GetWorksheetFunction();
let ans = func.POISSON(x, mean, cumulative);

worksheet.GetRange("C1").SetValue(ans);
