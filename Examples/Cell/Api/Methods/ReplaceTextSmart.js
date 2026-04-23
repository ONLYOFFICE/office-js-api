// Replace the text in each selected cell with a new value from a list in a spreadsheet.

// How do I swap out the contents of multiple cells at once using a set of replacement values in a spreadsheet?

// Overwrite selected cell values in bulk using a matching array of strings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:A2");
range.Select();
Api.ReplaceTextSmart(["Cell 1", "Cell 2"]);