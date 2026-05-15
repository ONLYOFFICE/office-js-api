// Convert angle measurements from radians to degrees in a spreadsheet.

// What is a radian value expressed in degrees in a spreadsheet?

// Transform radian angles into their degree equivalents in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEGREES(1.5));