// Set the text properties for all chart data labels in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue(2014);
worksheet.GetRange('C1').SetValue(2015);
worksheet.GetRange('D1').SetValue(2016);
worksheet.GetRange('A2').SetValue('Projected Revenue');
worksheet.GetRange('A3').SetValue('Estimated Costs');
worksheet.GetRange('B2').SetValue(200);
worksheet.GetRange('B3').SetValue(250);
worksheet.GetRange('C2').SetValue(240);
worksheet.GetRange('C3').SetValue(260);
worksheet.GetRange('D2').SetValue(280);
worksheet.GetRange('D3').SetValue(280);

const chart = worksheet.AddChart(
	"'Sheet1'!$A$1:$D$3", true, 'bar3D', 2,
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(70),
	0, Api.MillimetersToEmus(2),
	5, Api.MillimetersToEmus(3)
);
chart.SetTitle('Financial Overview', 13);
chart.SetShowDataLabels(false, false, true, false);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(55, 71, 79)), 0, false);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(21, 101, 131)), 1, false);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(18);
textPr.SetBold(true);
textPr.SetFontFamily('Arial');
textPr.SetColor(Api.HexColor('#54b8f7'));
chart.SetDataLabelsTextPr(textPr);
