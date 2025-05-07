// This example sets the top margin of the sheet.

// How to set margin of the top side.

// Resize the top margin of the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetTopMargin(25.1);
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");
