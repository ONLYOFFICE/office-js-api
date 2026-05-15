// Access the cells that a named range covers in a spreadsheet.

// How do I work with the actual cells behind a named range in a spreadsheet?

// Look up a range by its label and apply formatting to those cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "$A$1:$B$1");
let defName = Api.GetDefName("numbers");
let range = defName.GetRefersToRange();
range.SetBold(true);