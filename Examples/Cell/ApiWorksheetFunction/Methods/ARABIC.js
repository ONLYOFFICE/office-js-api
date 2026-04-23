// Convert Roman numerals to regular numbers in a spreadsheet.

// Transform text Roman numerals using the ARABIC function in a spreadsheet.

// Place the converted number into a cell for calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ARABIC("MCCL"));