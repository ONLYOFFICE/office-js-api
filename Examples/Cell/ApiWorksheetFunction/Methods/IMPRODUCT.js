let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMPRODUCT("-2+2.5i", "0.1+1.5j", "1+3i"));