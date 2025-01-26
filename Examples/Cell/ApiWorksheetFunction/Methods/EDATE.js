
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.EDATE("3/16/2018", 7); 

worksheet.GetRange("C1").SetValue(ans);
