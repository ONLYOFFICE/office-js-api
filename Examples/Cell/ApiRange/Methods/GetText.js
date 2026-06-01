// Read the raw text content from a cell range in a spreadsheet.

// How do I extract the text stored in a range of cells in a spreadsheet?

// Pull the displayed text from a range and write it into another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("text1");
worksheet.GetRange("B1").SetValue("text2");
worksheet.GetRange("C1").SetValue("text3");
let range = worksheet.GetRange("A1:C1");
let text = range.GetText();
worksheet.GetRange("A3").SetValue("Text from the cell A1: " + text);