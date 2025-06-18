// This example selects the current range.

// How to select a range.

// Select a range and get a selection from the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C1");
range.SetValue("1");
range.Select();
Api.GetSelection().SetValue("selected");