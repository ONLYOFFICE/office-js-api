// Set a string value representing the object name in a spreadsheet.

// How to rename an object in a spreadsheet.

// Set a new name for an object and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("name", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("name");
defName.SetName("new_name");
let newDefName = Api.GetDefName("new_name");
worksheet.GetRange("A3").SetValue("The new name of the range: " + newDefName.GetName());