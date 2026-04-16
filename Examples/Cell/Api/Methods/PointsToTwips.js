// Convert points to twips in a spreadsheet.

// How to convert points to twips in a spreadsheet?

// Convert points to twips using the spreadsheet API.

const points = 1000;
const twips = Api.PointsToTwips(points);
const text = points + ' points are equal to ' + twips + ' twips.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);