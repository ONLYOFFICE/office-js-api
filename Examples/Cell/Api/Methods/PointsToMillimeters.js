// Convert points to millimeters in a spreadsheet.

// How can I convert points to millimeters in a spreadsheet?

// Convert points to millimeters in a spreadsheet.

const points = 100;
const millimeters = Api.PointsToMillimeters(points);
const text = points + ' points are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);