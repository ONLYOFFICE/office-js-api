
const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("B3").SetValue("45")
let result = func.ISERROR("B3");
worksheet.GetRange("C3").SetValue(result)
