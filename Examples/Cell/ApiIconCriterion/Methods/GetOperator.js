// This example shows how to get the comparison operator of an icon criterion.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Scores');
worksheet.GetRange('A2').SetValue(85);
worksheet.GetRange('A3').SetValue(60);
worksheet.GetRange('A4').SetValue(35);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();

const criteria = iconCondition.GetIconCriteria();
criteria[1].SetOperator('xlGreater');

for (let i = 0; i < criteria.length; i++) {
	const range = worksheet.GetRange('B' + (i + 2));
	range.SetValue('Criterion ' + (i + 1) + ' operator: ' + criteria[i].GetOperator());
}
