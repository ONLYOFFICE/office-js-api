// Convert points to pixels in a spreadsheet.

// How do I convert points to pixels in a spreadsheet?

// Convert points to pixels and display the result in a spreadsheet.

const points = 1000;
const pixels = Api.PointsToPixels(points);
const text = points + ' points are equal to ' + pixels + ' pixels.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);