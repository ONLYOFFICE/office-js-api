// This example clears all the formatting in the range.

// How to clear formatting for a range.

// Get a range, clear formatting and show the result.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:A2").SetValue("Example text")
worksheet.GetRange("A1:A2").SetBold(true);
let range = worksheet.GetRange("A1");
range.ClearFormats();
worksheet.GetRange("A3").SetValue("Result is bold format cleared for A1 cell.");
