// Calculate the average of a list that includes numbers, text, and logical values in a spreadsheet.

// Average values when the range contains text or TRUE/FALSE entries in a spreadsheet.

// Include non-numeric cells such as booleans when computing a mean in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.AVERAGEA(78, 98, 46, 123, 45, true, false);
worksheet.GetRange("B2").SetValue(ans);
