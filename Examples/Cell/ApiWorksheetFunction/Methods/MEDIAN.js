

const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let median = func.MEDIAN(4,45,12,34,3,54,2,2);
worksheet.GetRange("C1").SetValue(median);


