// Convert emus to millimeters in a spreadsheet.

// How do I convert emus to millimeters in a spreadsheet?

// Convert emus to millimeters and display the result in a spreadsheet.

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
const text = emus + ' emus are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);