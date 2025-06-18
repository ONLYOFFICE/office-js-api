// This example shows how to get an object that represents the selected range.

// How to get selected range.

// Get selection from the worksheet and set its value.

let worksheet = Api.GetActiveSheet();
worksheet.GetSelection().SetValue("selected");