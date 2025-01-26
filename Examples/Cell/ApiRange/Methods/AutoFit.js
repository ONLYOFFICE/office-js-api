// This example changes the width of the columns or the height of the rows in the range to achieve the best fit.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is an example of the column width autofit.");
range.AutoFit(false, true);