
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.YEARFRAC("12/7/1981", "11/5/2018");

worksheet.GetRange("C1").SetValue(ans);
