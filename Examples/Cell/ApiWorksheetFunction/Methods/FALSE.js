
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.FALSE(); //returns false, doesnt require arguments
worksheet.GetRange("C1").SetValue(ans);
