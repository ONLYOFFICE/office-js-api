
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.ISEVEN("66");
worksheet.GetRange("C3").SetValue(result)
