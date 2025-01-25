
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.MINUTE("4:25 pm"); 

worksheet.GetRange("C1").SetValue(ans);
