// Convert pixels to points in a spreadsheet.

// How can I convert pixels to points in a spreadsheet?

// Convert pixels to points in a spreadsheet.

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
const text = pixels + ' pixels are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);