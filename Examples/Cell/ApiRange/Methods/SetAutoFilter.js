// Apply an automatic filter to a cell range in a spreadsheet.

// How do I let users filter rows by value within a range in a spreadsheet?

// Narrow visible rows down to only those matching chosen values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("header");
worksheet.GetRange("A2").SetValue("value2");
worksheet.GetRange("A3").SetValue("value3");
worksheet.GetRange("A4").SetValue("value4");
worksheet.GetRange("A5").SetValue("value5");
let range = worksheet.GetRange("A1:A5");
range.SetAutoFilter(1, ["value2","value3"], "xlFilterValues");