// This example changes the width of the columns or the height of the rows in the range to achieve the best fit.
// How to set an autofit for width or height for a range.
// Get a range and apply autofit property.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is an example of the column width autofit.");
oRange.AutoFit(false, true);