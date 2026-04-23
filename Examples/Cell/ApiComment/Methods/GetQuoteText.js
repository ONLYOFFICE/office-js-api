// Read the quoted text associated with a cell comment in a spreadsheet.

// How do I retrieve the text that a comment quotes from its target cell in a spreadsheet?

// Capture the source text that a comment references to understand what content it annotates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's quote text: ");
worksheet.GetRange("B3").SetValue(comment.GetQuoteText());