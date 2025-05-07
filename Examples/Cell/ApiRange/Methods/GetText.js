// This example shows how to get the text of the specified range.

// How to get a cell raw text value.

// Get a range, get its text value and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("text1");
worksheet.GetRange("B1").SetValue("text2");
worksheet.GetRange("C1").SetValue("text3");
let range = worksheet.GetRange("A1:C1");
let text = range.GetText();
worksheet.GetRange("A3").SetValue("Text from the cell A1: " + text);
