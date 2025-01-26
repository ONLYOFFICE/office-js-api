
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("B3").SetValue("#N/A")
let result = func.ISERR("B3");
worksheet.GetRange("C3").SetValue(result)
