// Pull out a set of columns from a range as their own sub-range in a spreadsheet.

// How do I select only the first few columns of a range in a spreadsheet?

// Isolate the leading columns from a wider selection and fill them with a highlight color.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C3");
range.GetCols(2).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));