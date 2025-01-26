
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let max = func.MAX(123, 197, 46, 354, 67, 456);
worksheet.GetRange("C1").SetValue(max);
