// This example specifies that the contents of the cell is displayed with a single horizontal line through the center of the contents.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Struckout text");
worksheet.GetRange("A2").SetStrikeout(true);
worksheet.GetRange("A3").SetValue("Normal text");