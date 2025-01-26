
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let minA = func.MINA(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(minA);
