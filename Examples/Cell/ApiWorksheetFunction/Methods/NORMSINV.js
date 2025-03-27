
const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(0.25);

//method params
let value = worksheet.GetRange("A1").GetValue();

let func = Api.GetWorksheetFunction();
let ans = func.NORMSINV(value);

worksheet.GetRange("C1").SetValue(ans);
