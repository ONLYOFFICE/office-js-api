// Switch measurements between different units in a spreadsheet.

// How do you change pounds to kilograms in a spreadsheet?

// Transform a value from one measurement standard to another in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONVERT(2, "Ibm", "kg"));