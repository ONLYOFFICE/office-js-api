
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.DAY("2018/3/16"); 

worksheet.GetRange("C1").SetValue(ans);
