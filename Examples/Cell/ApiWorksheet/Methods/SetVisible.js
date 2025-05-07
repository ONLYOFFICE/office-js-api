// This example sets the state of sheet visibility.

// How to set visibility of the sheet.

// Make a sheet visible or not.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
worksheet.GetRange("A1").SetValue("The current worksheet is visible.");