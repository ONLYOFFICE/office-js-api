let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISREF("A3"));
worksheet.GetRange("A2").SetValue(func.ISREF(worksheet.GetRange("A3")));