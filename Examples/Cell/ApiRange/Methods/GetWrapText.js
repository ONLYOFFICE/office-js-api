// This example shows how to get the information about the wrapping cell style.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is the text wrapped to fit the cell size.");
range.SetWrap(true);
worksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + range.GetWrapText());