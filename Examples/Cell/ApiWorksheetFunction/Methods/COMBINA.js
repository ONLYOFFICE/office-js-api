// Count combinations when items can be repeated in a spreadsheet.

// How many selections can you make if you can reuse items in a spreadsheet?

// Find all possible selections including repeated items in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMBINA(7, 2));