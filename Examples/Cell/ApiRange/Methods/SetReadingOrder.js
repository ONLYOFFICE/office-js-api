// Set the reading order of the text in the cell range in a spreadsheet.

// How to set reading order for a cell range?

// Set reading order and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Hello, أهلاً, 你好");
const range = worksheet.GetRange("A1:C3");
range.SetReadingOrder('rtl');