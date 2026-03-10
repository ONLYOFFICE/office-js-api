// This example shows how to set the comparison operator for an icon criterion.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Results');
worksheet.GetRange('A2').SetValue(80);
worksheet.GetRange('A3').SetValue(55);
worksheet.GetRange('A4').SetValue(30);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();
const criteria = iconCondition.GetIconCriteria();
const secondCriterion = criteria[1];

worksheet.GetRange('B1').SetValue('Operator before: ' + secondCriterion.GetOperator());
secondCriterion.SetOperator('xlGreater');
worksheet.GetRange('B2').SetValue('Operator after: ' + secondCriterion.GetOperator());
