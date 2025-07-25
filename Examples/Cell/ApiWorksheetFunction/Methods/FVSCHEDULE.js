// This example shows how to return the future value of an initial principal after applying a series of compound interest rates.

// How to get the future value of an initial principal.

// Use a function to get future value of an initial principal based on different parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Principal");
worksheet.GetRange("B1").SetValue(100);
worksheet.GetRange("A2").SetValue("Rate 1");
worksheet.GetRange("B2").SetValue(0.03);
worksheet.GetRange("A3").SetValue("Rate 2");
worksheet.GetRange("B3").SetValue(0.05);
worksheet.GetRange("A4").SetValue("Rate 3");
worksheet.GetRange("B4").SetValue(0.1);
let range = worksheet.GetRange("B2:B4");
worksheet.GetRange("B5").SetValue(func.FVSCHEDULE(100, range));