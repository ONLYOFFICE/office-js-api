
const worksheet = Api.GetActiveSheet(); 
let func = Api.GetWorksheetFunction();
let result = func.SHEET("Sheet1");
worksheet.GetRange("C3").SetValue(result);
