// Assign a custom name to a cell range in a spreadsheet.

// How do I label a group of cells so I can refer to them by name in a spreadsheet?

// Give a range a memorable label instead of using raw cell addresses.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");