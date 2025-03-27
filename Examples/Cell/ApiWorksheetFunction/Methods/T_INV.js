

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.T_INV(0.75, 2);
worksheet.GetRange("B2").SetValue(result);

