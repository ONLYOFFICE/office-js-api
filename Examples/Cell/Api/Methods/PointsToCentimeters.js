// Convert points to centimeters in a spreadsheet.

// How can I convert points to centimeters in a spreadsheet?

// Convert points to centimeters in a spreadsheet.

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
const text = points + ' points are equal to ' + centimeters + ' centimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);