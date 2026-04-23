// Copy a range of cells to another location in a spreadsheet.

// How do I duplicate a group of cells without retyping the content in a spreadsheet?

// Replicate cell content from one place to another without removing the original in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is copied to the range A3.");
range.Copy(worksheet.GetRange("A3"));