// This example pastes the Range object to the specified range.

// How to get a range and paste it into another one.

// Create a range and add it to another one.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
let rangeFrom = worksheet.GetRange("B4:D4");
let range = worksheet.GetRange("A1:C1");
range.Paste(rangeFrom);