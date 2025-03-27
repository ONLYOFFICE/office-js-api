// This example sets the cell offset.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("Old Range");
let range = worksheet.GetRange("B3");
range.SetOffset(2, 2);
range.SetValue("New Range");