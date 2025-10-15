// This example shows how to convert points to twips.

const points = 1000;
const twips = Api.PointsToTwips(points);
const text = points + ' points are equal to ' + twips + ' twips.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
