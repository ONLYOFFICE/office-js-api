// Convert EMUs (english metric units) to points in a spreadsheet.

// How do I convert emus to points in a spreadsheet?

// Convert emus to points and display the result in a spreadsheet.

const emus = 100;
const points = Api.EmusToPoints(emus);
const text = emus + ' emus are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);