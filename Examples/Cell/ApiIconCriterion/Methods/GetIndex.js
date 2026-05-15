// Find the position of an icon criterion within its rule's collection in a spreadsheet.

// How do I determine the order of a criterion inside an icon set rule in a spreadsheet?

// Identify which slot a particular condition occupies in the icon set sequence in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Data');
worksheet.GetRange('A2').SetValue(90);
worksheet.GetRange('A3').SetValue(70);
worksheet.GetRange('A4').SetValue(50);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();
const criteria = iconCondition.GetIconCriteria();
const lastCriterion = criteria[criteria.length - 1];

worksheet.GetRange('B1').SetValue('Last criterion index: ' + lastCriterion.GetIndex());
worksheet.GetRange('B2').SetValue('Total criteria: ' + criteria.length);