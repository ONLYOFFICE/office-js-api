// Convert twips to points in a spreadsheet.

// How do I convert twips to points in a spreadsheet?

// Convert twips to points and display the result in a spreadsheet.

const twips = 100;
const points = Api.TwipsToPoints(twips);
const text = twips + ' twips are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);