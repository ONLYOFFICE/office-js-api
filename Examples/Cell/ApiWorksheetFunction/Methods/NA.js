
const worksheet = Api.GetActiveSheet(); 
let func = Api.GetWorksheetFunction();
let result = func.NA();
worksheet.GetRange("C3").SetValue(result);
