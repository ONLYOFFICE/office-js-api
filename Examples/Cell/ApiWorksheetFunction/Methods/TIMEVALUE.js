// This example shows how to convert a text time to a serial number for a time, a number from 0 (12:00:00 AM) to 0.999988426 (11:59:59 PM). Format the number with a time format after entering the formula.

// How to create a serial number from a date time object.

// Use a function to convert date, hours, minutes and seconds to serial numbers.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.TIMEVALUE("11/5/18 11:17:00 am"); 

worksheet.GetRange("C1").SetValue(ans);
