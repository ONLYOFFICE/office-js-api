

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.WEIBULL_DIST(12, 2, 5, true);
worksheet.GetRange("B2").SetValue(result);

