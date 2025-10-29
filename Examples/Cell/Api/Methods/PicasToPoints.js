// This example shows how to convert picas to points.

const picas = 100;
const points = Api.PicasToPoints(picas);
const text = picas + ' picas are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
