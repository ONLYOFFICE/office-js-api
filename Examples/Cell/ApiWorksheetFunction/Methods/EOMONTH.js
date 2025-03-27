
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.EOMONTH("3/16/2018", 10); 

worksheet.GetRange("C1").SetValue(ans);
