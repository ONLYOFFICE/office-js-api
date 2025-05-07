// This example adds a new name to a range of cells.

// How to name a range of cells.

// Name a range according its purpose.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");