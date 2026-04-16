// Specify whether the sheet gridlines must be displayed or not in a spreadsheet.

// How to set whether sheet gridlines should be displayed or not in a spreadsheet.

// Set a boolean value representing whether to display gridlines or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no gridlines");
worksheet.SetDisplayGridlines(false);