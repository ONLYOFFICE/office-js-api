
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let result = func.ISODD("94");
worksheet.GetRange("C3").SetValue(result);
