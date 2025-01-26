
const worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:A5").GetValue();
let func = Api.GetWorksheetFunction();
let maxA = func.MAX(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(maxA);
