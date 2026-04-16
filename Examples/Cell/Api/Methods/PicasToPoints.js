// Convert picas to points in a spreadsheet.

// How to convert picas to points in a spreadsheet?

// Convert picas to points using the spreadsheet API.

const picas = 100;
const points = Api.PicasToPoints(picas);
const text = picas + ' picas are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);