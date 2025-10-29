// This example clears all the hyperlinks in the range.

// How to clear hyperlinks for a range.

// Get a range, clear hyperlinks and show the result.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:B1").SetValue("http://example.com");
let range = worksheet.GetRange("A1");
range.ClearHyperlinks();
worksheet.GetRange("A2").SetValue("Result is hyperlinks cleared for A1 cell.");
