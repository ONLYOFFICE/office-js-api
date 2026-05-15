// Set the direction text is read across a cell range in a spreadsheet.

// How do I switch text to read right-to-left in a spreadsheet?

// Support languages like Arabic or Hebrew by adjusting the text flow direction in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Hello, أهلاً, 你好");
const range = worksheet.GetRange("A1:C3");
range.SetReadingOrder('rtl');