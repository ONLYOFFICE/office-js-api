
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.WEEKDAY("11/5/2018", 2); 

worksheet.GetRange("C1").SetValue(ans);
