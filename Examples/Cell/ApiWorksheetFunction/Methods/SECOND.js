
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.SECOND("16:39:35"); 

worksheet.GetRange("C1").SetValue(ans);
