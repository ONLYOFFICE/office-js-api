const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

worksheet.GetRange("C1").SetValue(ans);
