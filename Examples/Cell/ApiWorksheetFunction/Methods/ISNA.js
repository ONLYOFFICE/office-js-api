// This example shows how to check whether a value is N/A, and returns true or false. 

// How to check if the cell contains N/A value.

// Use a function to check whether a range data is an N/A value.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISNA("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNA(255));
worksheet.GetRange("A3").SetValue(func.ISNA("www.example.com"));