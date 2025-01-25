
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.YEAR("3/16/2018");

worksheet.GetRange("C1").SetValue(ans);
