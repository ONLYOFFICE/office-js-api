// Express a pixel count as typographic points in a spreadsheet.

// How do I turn a number of pixels into an equivalent number of points in a spreadsheet?

// Record the point equivalent of a pixel measurement in a spreadsheet.

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
const text = pixels + ' pixels are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);