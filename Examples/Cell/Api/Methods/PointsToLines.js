// This example shows how to convert points to lines.

const points = 100;
const lines = Api.PointsToLines(points);
const text = points + ' points are equal to ' + lines + ' lines.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
