// Show or hide the gridlines on a sheet in a spreadsheet.

// How do I turn gridlines on or off in a spreadsheet?

// Control whether the cell border lines are visible on the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no gridlines");
worksheet.SetDisplayGridlines(false);