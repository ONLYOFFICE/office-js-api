
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.DAYS360("3/31/2018", "4/30/2019", false); 

worksheet.GetRange("C1").SetValue(ans);
