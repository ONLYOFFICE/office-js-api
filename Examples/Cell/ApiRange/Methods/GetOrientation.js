// This example shows how to get the range angle.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");
let orientation = range.GetOrientation();
worksheet.GetRange("A3").SetValue("Orientation: " + orientation);