
const worksheet = Api.GetActiveSheet();

let condition = 12 < 100;
let func = Api.GetWorksheetFunction();
let ans = func.NOT(condition);

worksheet.GetRange("C1").SetValue(ans);
