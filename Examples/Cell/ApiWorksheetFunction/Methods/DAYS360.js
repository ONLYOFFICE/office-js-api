// This example shows how to return the number of days between two dates based on a 360-day year (twelve 30-day months).

// How to get number of days between two dates using 360-day year.

// Use function to get days count between two dates on a 360-day year.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAYS360("3/31/2018", "4/30/2019", false); 

worksheet.GetRange("C1").SetValue(ans);
