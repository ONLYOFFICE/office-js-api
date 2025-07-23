// This example shows how to return the median, or the number in the middle of the set of given numbers.

// How to get a median from the list.

// Use a function to get a value that located in the middle of the list.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let median = func.MEDIAN(4,45,12,34,3,54,2,2);
worksheet.GetRange("C1").SetValue(median);


