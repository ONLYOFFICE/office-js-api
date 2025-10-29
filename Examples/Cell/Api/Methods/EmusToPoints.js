// This example shows how to convert EMUs (english metric units) to points.

const emus = 100;
const points = Api.EmusToPoints(emus);
const text = emus + ' emus are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
