// Assign a named range to a group of cells for easier reference in a spreadsheet.

// How do I give a cell range a descriptive name in a spreadsheet?

// Label a range of cells so it can be referenced by name instead of address in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");