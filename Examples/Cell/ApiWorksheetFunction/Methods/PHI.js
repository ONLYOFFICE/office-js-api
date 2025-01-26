
const worksheet = Api.GetActiveSheet();

//method params
let number = 5;

worksheet.GetRange("A1").SetValue(number);

let func = Api.GetWorksheetFunction();
let ans = func.PHI(number);

worksheet.GetRange("C1").SetValue(ans);
