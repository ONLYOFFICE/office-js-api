// This example specifies whether the words in the cell must be wrapped to fit the cell size or not.

// How to wrapp a text in the cell.

// Get a range and make its content wrapped.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is the text wrapped to fit the cell size.");
range.SetWrap(true);
worksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + range.GetWrapText());