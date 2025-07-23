// This example shows how to check whether all conditions in a test are true.

// How to apply logical AND operation for a list of conditions.

// Use logical AND to evaluate an expression.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

worksheet.GetRange("C1").SetValue(ans);