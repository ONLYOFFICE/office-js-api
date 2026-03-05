// This example shows how to get the format conditions collection for a range.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Score');
worksheet.GetRange('A2').SetValue(10);
worksheet.GetRange('A3').SetValue(30);
worksheet.GetRange('A4').SetValue(80);

const dataRange = worksheet.GetRange('A2:A4');
const formatConditions = dataRange.GetFormatConditions();
formatConditions.AddDatabar();
worksheet.GetRange('C1').SetValue('Format conditions count: ' + formatConditions.GetCount());
