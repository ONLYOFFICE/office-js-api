let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMSUM("1+3i", "0.1+1.5j", "-2+2.5i"));