
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.HOUR("4:17 pm"); 

worksheet.GetRange("C1").SetValue(ans);
