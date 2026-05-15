// Resize columns or rows in a range so that all content fits without being cut off in a spreadsheet.

// How do I automatically adjust column width or row height to fit the text in a spreadsheet?

// Prevent truncated text by letting the spreadsheet size each column and row to match its content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is an example of the column width autofit.");
range.AutoFit(false, true);