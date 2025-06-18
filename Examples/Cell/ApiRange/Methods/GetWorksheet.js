// This example shows how to get the Worksheet object that represents the worksheet containing the specified range.

// How to get a worksheet where a range is contained in.

// Get a worksheet from its range and show its name.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C1");
range.SetValue("1");
let oSheet = range.GetWorksheet();
worksheet.GetRange("A3").SetValue("Worksheet name: " + oSheet.GetName());