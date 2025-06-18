// This example shows how to get the hour as a number from 0 (12:00 A.M.) to 23 (11:00 P.M.).

// How to get an hour.

// Use a function to get an hour from a time.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.HOUR("4:17 pm"); 

worksheet.GetRange("C1").SetValue(ans);
