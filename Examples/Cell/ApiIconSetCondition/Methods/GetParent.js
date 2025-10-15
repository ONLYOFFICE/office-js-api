// This example demonstrates getting the parent object of an icon set rule.

// How to retrieve the parent object that contains icon set conditional formatting.

// Get the parent object of the icon set rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(75);
worksheet.GetRange("A3").SetValue(55);
worksheet.GetRange("A4").SetValue(35);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let parent = iconCondition.GetParent();

worksheet.GetRange("B1").SetValue("Parent range: " + parent.GetAddress());
