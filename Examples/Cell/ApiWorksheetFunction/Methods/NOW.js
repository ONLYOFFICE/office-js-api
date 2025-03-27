
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.NOW(); 

worksheet.GetRange("C1").SetValue(ans);
