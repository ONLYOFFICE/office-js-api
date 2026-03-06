// This example shows how to get the parent range of a conditional formatting rule.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Sales Data');
worksheet.GetRange('A2').SetValue(100);
worksheet.GetRange('A3').SetValue(250);
worksheet.GetRange('A4').SetValue(150);

const dataRange = worksheet.GetRange('A2:A4');
const formatConditions = dataRange.GetFormatConditions();
const condition = formatConditions.Add('xlCellValue', 'xlGreater', '200');
condition.SetFillColor(Api.CreateColorFromRGB(200, 100, 100));

const parentRange = condition.GetParent();
worksheet.GetRange('C1').SetValue('Parent range:');
worksheet.GetRange('C2').SetValue(parentRange.GetAddress());
