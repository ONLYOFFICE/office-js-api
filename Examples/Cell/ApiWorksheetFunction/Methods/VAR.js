

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.let(1, 4, 2, 6, 0, 1, 3, 8, 0, 0, 6, 10, 0, 0, 7, 12)
worksheet.GetRange("B2").SetValue(result);

