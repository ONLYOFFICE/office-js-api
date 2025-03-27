// This example clears the range.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:B1");
range.SetValue("1");
range.Clear();
worksheet.GetRange("A2").SetValue("The range A1:B1 was just cleared.");