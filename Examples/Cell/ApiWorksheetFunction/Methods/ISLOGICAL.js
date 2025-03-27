
const worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("66");

let func = Api.GetWorksheetFunction();
let result = func.ISLOGICAL(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);
