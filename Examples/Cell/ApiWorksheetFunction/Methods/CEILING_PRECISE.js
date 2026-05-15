// Round any number upward consistently in a spreadsheet.

// What is the precise ceiling for positive and negative values in a spreadsheet?

// Always round toward positive infinity by a specified interval in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING_PRECISE(-6.7, 2));