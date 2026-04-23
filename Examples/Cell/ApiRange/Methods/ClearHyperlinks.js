// Remove all hyperlinks from a cell range while keeping the displayed text in a spreadsheet.

// How do I detach links from cells without deleting their text in a spreadsheet?

// Turn linked cells back into plain text by stripping away their URLs in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:B1").SetValue("http://example.com");
let range = worksheet.GetRange("A1");
range.ClearHyperlinks();
worksheet.GetRange("A2").SetValue("Result is hyperlinks cleared for A1 cell.");