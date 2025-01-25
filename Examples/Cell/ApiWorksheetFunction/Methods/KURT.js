const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let kurtosis = func.KURT(3, 89, 34, 2, 45, 4, 45, 13);
worksheet.GetRange("C1").SetValue(kurtosis);