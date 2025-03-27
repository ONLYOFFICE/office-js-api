
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.WORKDAY_INTL("9/8/2017", "-20", "0000011", "8/15/2017");

worksheet.GetRange("C1").SetValue(ans);
