

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.TINV(0.5, 10);
worksheet.GetRange("B2").SetValue(result);

