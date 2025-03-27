// This example shows how to get a column number for the selected cell.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("D9").GetCol();
worksheet.GetRange("A2").SetValue(range.toString());