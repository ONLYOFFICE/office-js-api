// This example shows how to convert points to inches.

const points = 1000;
const inches = Api.PointsToInches(points);
const text = points + ' points are equal to ' + inches + ' inches.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
