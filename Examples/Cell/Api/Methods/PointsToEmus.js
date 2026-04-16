// Convert points to emus in a spreadsheet.

// How do I convert points to emus in a spreadsheet?

// Convert points to emus and display the result in a spreadsheet.

const points = 1000;
const emus = Api.PointsToEmus(points);
const text = points + ' points are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);