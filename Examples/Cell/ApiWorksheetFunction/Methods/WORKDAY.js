
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.WORKDAY("12/7/1981", 56); 

worksheet.GetRange("C1").SetValue(ans);
