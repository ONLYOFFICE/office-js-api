// Set the text properties for a specific chart point data label in a spreadsheet.

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
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(69, 90, 100)), 0, false);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(38, 80, 109)), 1, false);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(24);
textPr.SetBold(true);
textPr.SetItalic(true);
textPr.SetFontFamily('Arial');
textPr.SetColor(Api.RGB(210, 105, 30));
chart.SetPointDataLabelTextPr(1, 0, textPr);
