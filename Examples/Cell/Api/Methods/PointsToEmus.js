// This example shows how to convert points to emus.

const points = 1000;
const emus = Api.PointsToEmus(points);
const text = points + ' points are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
