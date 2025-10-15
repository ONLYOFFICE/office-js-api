// This example shows how to return the number of whole workdays between two dates.

// How to get the number of whole workdays between two dates.

// Use a function to get number of days between two dates.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.NETWORKDAYS("3/16/2018", "12/31/2018"); 

worksheet.GetRange("C1").SetValue(ans);
