// This example shows how to get the type of an icon set conditional formatting rule.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Ratings');
worksheet.GetRange('A2').SetValue(90);
worksheet.GetRange('A3').SetValue(60);
worksheet.GetRange('A4').SetValue(25);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();

const conditionType = iconCondition.GetType();
worksheet.GetRange('B1').SetValue('Icon set condition type: ' + conditionType);
