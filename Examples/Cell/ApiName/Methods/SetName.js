// Rename a named range to a different label in a spreadsheet.

// How do I change the name of an existing named range in a spreadsheet?

// Update a range label so formulas and references use the new name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("name", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("name");
defName.SetName("new_name");
let newDefName = Api.GetDefName("new_name");
worksheet.GetRange("A3").SetValue("The new name of the range: " + newDefName.GetName());