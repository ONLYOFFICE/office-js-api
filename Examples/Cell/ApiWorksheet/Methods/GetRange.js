// This example shows how to get an object that represents the selected range of the sheet.

// How to get a range using address.

// Get range and set its horizontal alignment.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");