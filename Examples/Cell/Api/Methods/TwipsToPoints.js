// This example shows how to convert twips to points.

const twips = 100;
const points = Api.TwipsToPoints(twips);
const text = twips + ' twips are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
