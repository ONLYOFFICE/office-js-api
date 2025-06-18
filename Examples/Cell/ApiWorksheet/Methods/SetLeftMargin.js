// This example sets the left margin of the sheet.

// How to set margin of the left side.

// Resize the left margin of the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetLeftMargin(20.8);
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
