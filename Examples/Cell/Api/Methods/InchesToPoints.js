// Convert inches to points in a spreadsheet.

// How do I convert inches to points in a spreadsheet?

// Convert inches to points and display the result in a spreadsheet.

const inches = 100;
const points = Api.InchesToPoints(inches);
const text = inches + ' inches are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);