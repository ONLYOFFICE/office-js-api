// This example shows how to get the index of an icon criterion in the collection.

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
