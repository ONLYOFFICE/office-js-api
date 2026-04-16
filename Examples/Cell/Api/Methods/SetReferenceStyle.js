// Set reference style in a spreadsheet.

// How to set a style of a reference in a spreadsheet.

// Set reference style using ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());