// Shift a cell reference by a given number of rows and columns in a spreadsheet.

// How do I move a range reference to a different position in a spreadsheet?

// Target a new location relative to the original range without selecting it manually in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("Old Range");
let range = worksheet.GetRange("B3");
range.SetOffset(2, 2);
range.SetValue("New Range");