
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.TIMEVALUE("11/5/18 11:17:00 am"); 

worksheet.GetRange("C1").SetValue(ans);
