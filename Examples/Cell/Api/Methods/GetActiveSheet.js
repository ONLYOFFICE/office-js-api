// Get an object that represents the active sheet in a spreadsheet.

// How to get an active sheet object in a spreadsheet.

// Get active sheet for an editor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("B2").SetValue("2");
worksheet.GetRange("A3").SetValue("2x2=");
worksheet.GetRange("B3").SetValue("=B1*B2");