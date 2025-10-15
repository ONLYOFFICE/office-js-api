// This example shows how to return the annual duration of a security with periodic interest payments.

// How to get an annual duration of a security with periodic interest payments.

// Use function to find an annual duration of a security.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DURATION("1/10/2018", "6/15/2019", 0.08, 0.09, 4, 1));
