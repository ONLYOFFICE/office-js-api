// Get the type of an icon criterion in a spreadsheet.

// How to retrieve the type from an icon set criterion in a spreadsheet.

// Get the criterion type used for threshold comparison in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Scores");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
let firstCriterion = criteria[0];
let criterionType = firstCriterion.GetType();

worksheet.GetRange("B1").SetValue("First criterion type: " + criterionType);