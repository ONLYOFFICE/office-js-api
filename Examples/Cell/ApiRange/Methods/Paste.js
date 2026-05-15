// Copy the contents of one range and paste them into another location in a spreadsheet.

// How do I duplicate a row of cells and place the copy somewhere else in a spreadsheet?

// Transfer data from a source range to a target range without retyping it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
let rangeFrom = worksheet.GetRange("B4:D4");
let range = worksheet.GetRange("A1:C1");
range.Paste(rangeFrom);