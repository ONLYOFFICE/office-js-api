
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.ISOWEEKNUM("9/1/2017"); 

worksheet.GetRange("C1").SetValue(ans);
