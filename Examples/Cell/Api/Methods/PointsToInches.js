// Convert points to inches in a spreadsheet.

// How to convert points to inches in a spreadsheet?

// Convert points to inches using the spreadsheet API.

const points = 1000;
const inches = Api.PointsToInches(points);
const text = points + ' points are equal to ' + inches + ' inches.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);