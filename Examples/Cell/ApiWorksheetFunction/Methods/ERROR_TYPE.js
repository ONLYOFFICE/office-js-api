
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let nonPositiveNum = 0;
let logResult = func.LOG(nonPositiveNum);
worksheet.GetRange("B3").SetValue(logResult);
worksheet.GetRange("C3").SetValue(func.ERROR_TYPE(logResult));
