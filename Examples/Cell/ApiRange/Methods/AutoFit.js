// Change the width of the columns or the height of the rows in the range to achieve the best fit in a spreadsheet.

// How to set an autofit for width or height for a range in a spreadsheet.

// Get a range and apply autofit property in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is an example of the column width autofit.");
range.AutoFit(false, true);