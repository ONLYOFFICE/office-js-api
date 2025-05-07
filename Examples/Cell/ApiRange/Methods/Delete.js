// This example deletes the Range object.

// How to remove a range from the worksheet.

// Get a range from the worksheet and delete it specifying the direction.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Delete("up");