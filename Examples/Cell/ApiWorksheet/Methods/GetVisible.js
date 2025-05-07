// This example shows how to get the state of sheet visibility.

// How to get visibility of the worksheet.

// Find out whether a sheet is visible or not and display it in the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
let isVisible = worksheet.GetVisible();
worksheet.GetRange("A1").SetValue("Visible: ");
worksheet.GetRange("B1").SetValue(isVisible);