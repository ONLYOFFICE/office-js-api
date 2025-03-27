
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let min = func.MIN(123, 197, 46, 345, 67, 456);
worksheet.GetRange("C1").SetValue(min);
