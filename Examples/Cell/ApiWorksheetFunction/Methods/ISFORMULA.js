
const worksheet = Api.GetActiveSheet();

// Set the formula in cell B3
worksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3
let func = Api.GetWorksheetFunction();
let result = func.ISFORMULA(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);
