// This example shows how to get the type of a top 10 conditional formatting rule.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Employee');
worksheet.GetRange('B1').SetValue('Sales');
worksheet.GetRange('A2').SetValue('Alice');
worksheet.GetRange('A3').SetValue('Bob');
worksheet.GetRange('A4').SetValue('Carol');
worksheet.GetRange('A5').SetValue('David');
worksheet.GetRange('A6').SetValue('Eve');
worksheet.GetRange('A7').SetValue('Frank');
worksheet.GetRange('B2').SetValue(520);
worksheet.GetRange('B3').SetValue(310);
worksheet.GetRange('B4').SetValue(475);
worksheet.GetRange('B5').SetValue(690);
worksheet.GetRange('B6').SetValue(150);
worksheet.GetRange('B7').SetValue(410);

const dataRange = worksheet.GetRange('B2:B7');
const formatConditions = dataRange.GetFormatConditions();
const top10Condition = formatConditions.AddTop10();

top10Condition.SetRank(3);
top10Condition.SetFillColor(Api.CreateColorFromRGB(144, 238, 144));

const conditionType = top10Condition.GetType();
worksheet.GetRange('D2').SetValue('Condition type:');
worksheet.GetRange('E2').SetValue(conditionType);
worksheet.GetRange('D3').SetValue('Rank:');
worksheet.GetRange('E3').SetValue(top10Condition.GetRank());
