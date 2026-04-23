// Find which sheet a selected range belongs to in a spreadsheet.

// How do I identify the sheet that contains a particular range in a spreadsheet?

// Confirm the parent sheet of a range by checking its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C1");
range.SetValue("1");
let oSheet = range.GetWorksheet();
worksheet.GetRange("A3").SetValue("Worksheet name: " + oSheet.GetName());