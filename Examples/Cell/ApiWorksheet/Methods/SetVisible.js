// Set the state of sheet visibility in a spreadsheet.

// How to set visibility of the sheet in a spreadsheet.

// Make a sheet visible or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
worksheet.GetRange("A1").SetValue("The current worksheet is visible.");