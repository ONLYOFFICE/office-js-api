// This example shows how to get the formula associated with an icon set condition.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Month');
worksheet.GetRange('B1').SetValue('Revenue');
worksheet.GetRange('A2').SetValue('January');
worksheet.GetRange('A3').SetValue('February');
worksheet.GetRange('A4').SetValue('March');
worksheet.GetRange('A5').SetValue('April');
worksheet.GetRange('B2').SetValue(12000);
worksheet.GetRange('B3').SetValue(8500);
worksheet.GetRange('B4').SetValue(15000);
worksheet.GetRange('B5').SetValue(6200);

const range = worksheet.GetRange('B2:B5');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();

const formula = iconCondition.GetFormula();
if (formula) {
	worksheet.GetRange('D1').SetValue('Formula: ' + formula);
} else {
	worksheet.GetRange('D1').SetValue('Icon set condition does not have a formula.');
}
worksheet.GetRange('D2').SetValue('Type: ' + iconCondition.GetType());
