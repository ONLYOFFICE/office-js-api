// Remove a named range from a spreadsheet.

// How do I delete a named range I no longer need in a spreadsheet?

// Erase a saved range name to clean up the workbook in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
defName.Delete();
worksheet.GetRange("A3").SetValue("The name 'numbers' of the range A1:B1 was deleted.");