// Read the comparison operator from an icon criterion in a spreadsheet.

// How do I find out which comparison operator an icon criterion uses in a spreadsheet?

// Check whether a criterion compares values with greater-than, less-than, or another rule in a spreadsheet.

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